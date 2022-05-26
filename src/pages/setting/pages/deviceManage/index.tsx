import React, { useEffect } from 'react';
import { history } from 'umi';
import { List, NavBar, Toast } from 'antd-mobile';
import parentStyles from '@/pages/setting/index.css';
import styles from './index.css';
import { callHandler } from '@/utils/bridge';

interface deviceListItemProps {
  name: string;
  model: string;
  OSVersion: string;
}

export default function index() {
  const [list, setList] = React.useState<deviceListItemProps[]>([
    { name: 'vivo Y70t', model: 'V2002A', OSVersion: '10' },
  ]);

  const getDeiveInfo = () => {
    callHandler('getDevice');
  };

  useEffect(() => {
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
          <List.Item key={item.name}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles['sub-name']}>OS版本: {item.OSVersion}</div>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
