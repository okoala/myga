import { IUser, userService } from '@plugins/yuque-biz';
import { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { useStyles } from './mine.styles';

export function Mine() {
  const { styles } = useStyles();
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
      <Tooltip placement="topRight" title={'去往语雀首页'}>
        <img
          className={styles.avatar}
          onClick={() => userService.openHome()}
          src={mine?.avatar_url}
        />
      </Tooltip>
    </>
  );
}
