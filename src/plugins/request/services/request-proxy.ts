import { MapT } from '../interfaces/i-request';
import { backgrondRequestEventName } from '../constants';

export function request(data?: MapT<any>) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      {
        action: backgrondRequestEventName,
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
