class Storage {
  async set(key: string, data: any) {
    return await chrome.storage.local.set({
      [key]: data,
    });
  }

  async remove(key: string) {
    return chrome.storage.local.remove(key);
  }

  async get(key: string) {
    const valueMap = await chrome.storage.local.get(key);
    return valueMap[key];
  }
}

const storage = new Storage();

export { storage };
