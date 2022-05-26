import React, { useEffect, useMemo, useState } from 'react';
import { history } from 'umi';
import { Button, List, NavBar, Space, Toast, Form, Input, Modal } from 'antd-mobile';
import parentStyles from '@/pages/setting/index.css';
import styles from './index.css';
import { callHandler, registerHandler } from '@/utils/bridge';

interface ContactListItemProps {
  name: string;
  phone: string;
}

export default function ContactManage() {
  const [list, setList] = useState<ContactListItemProps[]>([]);
  const [visible, setVisible] = useState<boolean | undefined>(false);
  const [form] = Form.useForm();

  const goBack = () => {
    history.goBack();
  };

  const initContact = () => {
    onContactClick();
  };

  useEffect(() => {
    registerHandler('saveWebContact', (data: any) => {
      contactMessageHandler(data);
    });
    initContact();
  }, []);

  const onContactClick = () => {
    callHandler('getContact');
  };

  const contactMessageHandler = (data: string) => {
    const contacts = data
      .split(';')
      .filter((item) => !!item)
      .map((item) => {
        const [name, phone] = item.split(',');
        return { name, phone };
      });
    setList(contacts);
  };

  const formComponent = useMemo(() => {
    return (
      <Form form={form}>
        <Form.Item name="name" label="姓名">
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item name="phone" label="手机号">
          <Input placeholder="请输入手机号" />
        </Form.Item>
      </Form>
    );
  }, [form]);

  const onAddContactClick = async () => {
    setVisible(true);
  };

  const onModalConfirm = () => {
    const values = form.getFieldsValue();
    const { name, phone } = values;
    callHandler('saveContact', { name, phone }, () => {
      Toast.show({ icon: 'success', content: '添加成功' });
      setVisible(false);
    });
  };

  return (
    <div className={parentStyles['setting-layout']}>
      <NavBar className="mucfc-nav-bar" onBack={goBack}>
        联系人管理
      </NavBar>
      <List style={{ '--font-size': '0.32rem', marginTop: 20 }}>
        {list.map((item) => (
          <List.Item key={item.name} onClick={onContactClick}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles['sub-name']}>{item.phone}</div>
          </List.Item>
        ))}
      </List>
      <div className={styles['footer-button']}>
        <Space>
          <Button onClick={onContactClick}>同步联系人</Button>
          <Button onClick={onAddContactClick}>添加联系人</Button>
        </Space>
      </div>
      <Modal
        visible={visible}
        content={formComponent}
        onClose={() => setVisible(false)}
        actions={[
          {
            key: 'confirm',
            text: '确定',
            primary: true,
            onClick: onModalConfirm,
          },
          {
            key: 'cancel',
            text: '取消',
            onClick: () => setVisible(false),
          },
        ]}
      />
    </div>
  );
}
