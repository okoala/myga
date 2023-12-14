import { useCallback, useEffect } from 'react';
import useStorage from './useStorage';

export default function createStorageStateHook(key, initialValue, storageArea) {
  const consumers: any[] = [];

  return function useCreateStorageHook() {
    const [value, setValue, isPersistent, error, isInitialStateResolved] =
      useStorage(key, initialValue, storageArea);

    const setValueAll = useCallback(newValue => {
      for (const consumer of consumers) {
        consumer(newValue);
      }
    }, []);

    useEffect(() => {
      consumers.push(setValue);
      return () => {
        consumers.splice(consumers.indexOf(setValue), 1);
      };
    }, [setValue]);

    return [value, setValueAll, isPersistent, error, isInitialStateResolved];
  };
}
