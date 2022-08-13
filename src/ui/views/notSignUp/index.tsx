import styles from '../../pages/notSignUp/notLog.module.scss';
import { ReactComponent as NotAurhorized } from '../../../media/images/hide.svg';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../core/store/store';
import cn from 'classnames';

const NotLoggedViev = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  useEffect(() => {
    //big big костилі xD
    document.body.style.backgroundColor = darkTheme ? '#371b58' : 'white';
  }, [darkTheme]);

  return (
    <div
      className={cn(styles.notAuthorized, { [styles.darkTheme]: darkTheme })}
    >
      <NotAurhorized className={styles.hiddenContent} />
      <h3>Authorize first to see content</h3>
    </div>
  );
};

export default NotLoggedViev;
