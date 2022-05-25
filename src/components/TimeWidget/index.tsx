import React from 'react';
import { AutoCenter } from 'antd-mobile';
import dayjs from 'dayjs';
import { HOUR_FORMAT, WEEK_NUMBER_MAP } from '@/utils/constant';
import styles from './index.css';

interface TimeWidgetProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}
export default function TimeWidget(props: TimeWidgetProps) {
  const { title = '我的工作空间', className, style } = props;
  const time = dayjs().format(HOUR_FORMAT);
  const day = dayjs().format(`MM月DD日`);
  const weekNum = dayjs().get('day');
  return (
    <div className={className} style={style}>
      <AutoCenter className={styles.time}>{time}</AutoCenter>
      <AutoCenter className={styles.date}>
        {day}
        <span style={{ marginLeft: 10 }}>星期{(WEEK_NUMBER_MAP as any)[weekNum]}</span>
      </AutoCenter>
      <AutoCenter className={styles['sub-title']}>{title}</AutoCenter>
    </div>
  );
}
