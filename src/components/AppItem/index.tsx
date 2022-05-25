import React from 'react';
import { Image } from 'antd-mobile';
import styles from './index.css';

interface AppItemProps {
  name?: string;
  icon: string | React.ReactNode;
  onClick: () => void;
}

const DEFAULT_STYLE = { width: 60, height: 60, fit: 'cover', style: { borderRadius: 8 } };

export default function AppItem(props: AppItemProps) {
  const { name, icon, ...restProps } = props;
  const imageStyle: any = Object.assign(DEFAULT_STYLE, restProps);

  const img = typeof icon === 'string' ? <Image {...imageStyle} src={icon} /> : icon;
  return (
    <span className={styles['app-item']}>
      {img}
      <div className={styles['app-item-name']}>{name}</div>
    </span>
  );
}
