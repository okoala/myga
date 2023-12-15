import useStorage from '@lib/use-storage/useStorage';
import { themeStoragekey } from '../constants';

export function useTheme() {
  const [theme, setTheme] = useStorage(themeStoragekey, 'light');

  return {
    theme,
    selectTheme(theme) {
      setTheme(theme);
    },
  };
}
