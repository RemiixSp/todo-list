import styles from '../../../pages/notSignUp/notLog.module.scss';
import NotAurhorized from '../../../../public/images/hide.svg';
import React from 'react';
import { useAppSelector } from '../../../core/store/store';
import cn from 'classnames';

const NotLoggedView = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  return (
    <div
      className={cn(
        styles.notAuthorized,
        { [styles.darkTheme]: darkTheme },
        'vh-100'
      )}
    >
      <NotAurhorized className={styles.hiddenContent} />
      <h3>Authorize first to see content</h3>
    </div>
  );
};

export default NotLoggedView;
