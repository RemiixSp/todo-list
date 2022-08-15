import styles from '../../pages/notSignUp/notLog.module.scss';
import { ReactComponent as NotAurhorized } from '../../../media/images/hide.svg';
import React from 'react';

const NotLoggedViev = () => {
  return (
    <div className={styles.notAuthorized}>
      <NotAurhorized className={styles.hiddenContent} />
      <h3>Authorize first to see content</h3>
    </div>
  );
};

export default NotLoggedViev;
