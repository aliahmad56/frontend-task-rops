// ttl:(in milliseconds)
export function setLocalStorage<T>(key: string, value: T, ttl = 2592000000) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorage(key: string) {
  try {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    // const now = new Date();

    // if (now.getTime() > item.expiry) {
    //   localStorage.removeItem(key);
    //   return null;
    // }
    return item;
  } catch (error) {
    return "";
  }
}

export function removeLocalStorageItem(key: string) {
  return localStorage.removeItem(key);
}
