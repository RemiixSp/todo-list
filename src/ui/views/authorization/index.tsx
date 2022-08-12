import React from 'react';
import styles from '../../pages/authorization/authorization.module.scss';
import { Formik } from 'formik';

const AuthorizationView = () => {
  return (
    <div className={styles.authorizationContainer}>
      <section className='vh-80'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div className='card shadow-2-strong'>
                <div className='card-body p-5 text-center'>
                  <h3 className='mb-5'>Sign in</h3>
                  <form>
                    <div className='form-outline mb-4'>
                      <input
                        type='email'
                        id='typeEmailX-2'
                        className='form-control form-control-lg'
                      />
                      <label className='form-label' htmlFor='typeEmailX-2'>
                        Email
                      </label>
                    </div>

                    <div className='form-outline mb-4'>
                      <input
                        type='password'
                        id='typePasswordX-2'
                        className='form-control form-control-lg'
                      />
                      <label className='form-label' htmlFor='typePasswordX-2'>
                        Password
                      </label>
                    </div>

                    <button
                      className='btn btn-primary btn-lg btn-block'
                      type='submit'
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorizationView;
