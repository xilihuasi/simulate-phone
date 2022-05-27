import React, { useState } from 'react';
import { history } from 'umi';
import { List, NavBar } from 'antd-mobile';
import { UnorderedListOutline, TeamOutline } from 'antd-mobile-icons';
import styles from './index.css';

export default () => {
  const list = [
    {
      name: '设备管理',
      icon: <UnorderedListOutline />,
      onClick: () => history.push('/setting/pages/deviceManage'),
      clickable: true
    },
    {
      name: '联系人管理',
      icon: <TeamOutline />,
      onClick: () => history.push('/setting/pages/contactManage'),
      clickable: true
    }
  ];

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={styles['setting-layout']}>
      <NavBar className="mucfc-nav-bar" onBack={goBack}>
        设置
      </NavBar>
      <List style={{ marginTop: 20 }}>
        {list.map((item) => (
          <List.Item
            key={item.name}
            prefix={item.icon}
            clickable={item.clickable}
            onClick={item.onClick}
          >
            {item.name}
          </List.Item>
        ))}
      </List>
    </div>
  );
};
