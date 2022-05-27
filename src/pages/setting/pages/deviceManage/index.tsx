import React, { useEffect } from 'react';
import { history } from 'umi';
import { List, NavBar, Toast } from 'antd-mobile';
import parentStyles from '@/pages/setting/index.css';
import styles from './index.css';
import { callHandler, registerHandler } from '@/utils/bridge';

interface deviceListItemProps {
  name: string;
  model: string;
  OSVersion: string;
  deviceId?: string;
}

export default function index() {
  const [list, setList] = React.useState<deviceListItemProps[]>([]);

  const getDeiveInfo = () => {
    callHandler('getDevice');
  };

  const contactMessageHandler = (data: string) => {
    const [name, model, OSVersion, deviceId] = data.split(',');
    setList([{ name, model, OSVersion, deviceId }]);
  };

  useEffect(() => {
    registerHandler('saveDeviceInfo', (data: any) => {
      contactMessageHandler(data);
    });
    getDeiveInfo();
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={parentStyles['setting-layout']}>
      <NavBar className="mucfc-nav-bar" onBack={goBack}>
        设备管理
      </NavBar>
      <List style={{ '--font-size': '0.32rem', marginTop: 20 }}>
        {list.map((item) => (
          <List.Item key={item.deviceId || item.name}>
            <div className={styles.name}>{item.name} {item.model}</div>
            <div className={styles['sub-name']}>OS版本: {item.OSVersion}</div>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
