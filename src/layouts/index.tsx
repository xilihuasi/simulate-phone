import useJSBridge from '@/utils/hooks/useJSBridge';
import useOriginAdmin from '@/utils/hooks/useOriginAdmin';
import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = (props) => {
  useJSBridge();
  useOriginAdmin();
  return (
    <div className={styles.basiclayout}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
