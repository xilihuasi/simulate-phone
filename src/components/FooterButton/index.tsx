import { Space } from 'antd-mobile';
import React from 'react';
import { history } from 'umi';
import AppItem from '../AppItem';
import styles from './index.css';
import settingIcon from '@/assets/icons/setting.png';

export default function FooterButton() {
  const apps = [
    {
      key: 'setting',
      icon: settingIcon,
      onClick: () => history.push('/setting'),
    },
  ];

  return (
    <div className={styles['footer-layout']}>
      <Space>
        {apps.map((app) => (
          <AppItem key={app.key} icon={app.icon} onClick={app.onClick} />
        ))}
      </Space>
    </div>
  );
}
