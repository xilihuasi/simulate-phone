import useJSBridge from '@/utils/hooks/useJSBridge';
import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = (props) => {
  useJSBridge();
  return (
    <div className={styles.basiclayout}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
