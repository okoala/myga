export const sendMessage = (action, data) => {
  return new Promise(async (resolve, reject) => {
    chrome.runtime.sendMessage(
      {
        action,
        data,
      },
      res => {
        if (!res) reject(res);
        else resolve(res);
      },
    );
  });
};
