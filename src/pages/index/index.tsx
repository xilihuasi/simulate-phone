import React from 'react';
import { Button } from 'antd-mobile';
import TimeWidget from '@/components/TimeWidget';
import styles from './index.css';
import FooterButton from '@/components/FooterButton';

export default function ({}) {
  return (
    <div className={styles.normal}>
      <TimeWidget className={styles.title} />
      <FooterButton />
    </div>
  );
}
