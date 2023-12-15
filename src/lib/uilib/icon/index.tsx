import _NavDay from '@assets/icons/nav-day.svg';
import _NavNight from '@assets/icons/nav-night.svg';
import _NavSystem from '@assets/icons/nav-system.svg';

function buildIcon(icon: string) {
  return (props = {}) => <img src={icon} {...props} />;
}

export const NavDay = buildIcon(_NavDay);
export const NavNight = buildIcon(_NavNight);
export const NavSystem = buildIcon(_NavSystem);
