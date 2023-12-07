import { BackgroundEventEnum } from '@core/interfaces/i-background';
import { MapT } from './interfaces/i-request';

export function request(data?: MapT<any>) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      {
        action: BackgroundEventEnum.Request,
        data,
      },
      res => {
        if (res.status === 200) {
          return resolve(res.data);
        }
        reject(res);
      },
    );
  });
}
