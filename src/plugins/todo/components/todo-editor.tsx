import { FloatButton } from '@lib/uilib/float-button';
import logo from '@assets/logo/okrrr-48.png';
import styles from './todo-editor.less';

export function TodoEditor() {
  return (
    <div>
      <style>{styles}</style>
      <FloatButton icon={<img src={logo} className="okrrr-todo-logo" />} />
    </div>
  );
}
