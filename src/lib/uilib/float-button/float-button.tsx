import React from 'react';
import styles from './float-button.less';

export function FloatButton(props) {
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-float-btn-box">
        <div className="okrrr-float-btn">
          <span className="okrrr-float-btn-icon">{props.icon}</span>
        </div>
      </div>
    </>
  );
}
