import React, { useEffect, useRef } from 'react';
import { callHandler } from '../bridge';

export default function useOriginAdmin() {
  const interRef = useRef();
  const setOriginListener = () => {
    return setInterval(() => {
      fetch('/api/device').then((res) => {
        res.json().then(({ data }) => {
          const { maskContact, isLock } = data || {};
        //   setDeviceMask(maskContact);
          setDeviceLock(isLock);
        });
      });
    }, 2000);
  };

  const setDeviceMask = (flag) => {
    callHandler('toggleMask', flag);
  };

  const setDeviceLock = (flag) => {
    callHandler('lockNow', flag);
  };

  useEffect(() => {
    interRef.current = setOriginListener();
    return () => {
      clearInterval(interRef.current);
    };
  }, []);
}
