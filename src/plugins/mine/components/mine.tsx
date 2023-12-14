import { IUser, userService } from '@plugins/yuque-biz';
import { useEffect, useState } from 'react';
import styles from './mine.less';
import { Tooltip } from 'antd';

export function Mine() {
  const [mine, setMine] = useState<IUser>();

  useEffect(() => {
    userService.getMine().then(_mine => {
      if (_mine) {
        setMine(_mine);
      }
    });
  }, []);

  return (
    <>
      <style>{styles}</style>
      <Tooltip placement="topRight" title={'去往语雀首页'}>
        <span
          className="okrrr-mine-avatar-link"
          onClick={() => userService.openHome()}
        >
          <img className="okrrr-mine-avatar" src={mine?.avatar_url} />
        </span>
      </Tooltip>
    </>
  );
}
