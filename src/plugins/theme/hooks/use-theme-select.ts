import { useEffect, useState } from 'react';
import { themeService } from '../services/theme-service';
import { ThemeSelectEnum } from '../interfaces/i-theme';

export function useThemeSelect() {
  const [themeSelected, setThemeSelected] = useState<ThemeSelectEnum>();

  useEffect(() => {
    themeService.currentThemeSelect().then(_theme => {
      setThemeSelected(_theme);
    });
  }, []);

  return {
    themeSelected,
    selectTheme(select) {
      setThemeSelected(select);
      themeService.swithTheme(select);
    },
  };
}
