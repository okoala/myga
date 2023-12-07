import { MapT, OneArgFunctionT } from './interface';
import { createRequestBridge } from './request';

export function callBackgroundBridge(
  bridgeName: string,
  data?: MapT<any>,
  callback?: OneArgFunctionT<any>,
) {
  callback =
    callback ||
    function () {
      // ignore
    };
  chrome.runtime.sendMessage(
    {
      action: bridgeName,
      data,
    },
    res => {
      callback?.(res);
    },
  );
}

function createBridge(impl) {
  return {
    request: createRequestBridge(impl),
  };
}

export const bridge = createBridge(callBackgroundBridge);
