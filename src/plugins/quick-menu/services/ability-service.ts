import { isYuquePathname } from '@plugins/yuque-biz';

export class AbilityService {
  canQuickMenu() {
    return isYuquePathname('/dashboard');
  }
}
