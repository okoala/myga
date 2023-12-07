import { isYuquePathname } from '@core/yuque';

export class AbilityService {
  canQuickMenu() {
    return isYuquePathname('/dashboard');
  }
}
