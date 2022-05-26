export const callHandler = (name: string, data: any = '', callBack?: any) => {
  (window as any).setupWebViewJavascriptBridge((bridge: any) => {
    bridge.callHandler(name, data, () => {
      callBack?.();
    });
  });
};

export const registerHandler = (name: string, callBack: any) => {
  if (!(window as any).WebViewJavascriptBridge) return;
  (window as any).setupWebViewJavascriptBridge((bridge: any) => {
    bridge.registerHandler(name, (data: any, fn: any) => {
      callBack?.(data);
      fn?.('');
    });
  });
};
