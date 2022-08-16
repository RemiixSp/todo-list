import React from 'react';
import styles from '../../pages/authorization/authorization.module.scss';
import * as yup from 'yup';
import cn from 'classnames';
import { login } from '../../../core/store/authorization';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useAppSelector } from '../../../core/store/store';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Incorrect email')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9~@.\s]+$/,
      'Only alphabets are allowed for this field '
    )
    .min(8, 'Email is too short')
    .max(36, 'Email is too long'),
  password: yup
    .string()
    .required('Required')
    .min(8, 'Password is too short')
    .max(25, 'Password is too long'),
});

const AuthorizationView = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values.email));
    },
  });

  return (
    <div className={styles.authorizationContainer}>
      <section className='vh-100'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div
                className={cn('card shadow-2-strong', {
                  [styles.darkThemeContainer]: darkTheme,
                })}
              >
                <div
                  className={cn('card-body p-5 text-center', styles.cardBody)}
                >
                  <h3 className='mb-5'>Sign in</h3>

                  <form onSubmit={formik.handleSubmit}>
                    <div className={styles.authBlock}>
                      <div
                        className={cn('form-outline mb-3', styles.authInput)}
                      >
                        <label
                          className={cn('form-label', styles.inputLabel)}
                          htmlFor='typeEmailX-2'
                        >
                          Email
                        </label>
                        <input
                          type='email'
                          id='typeEmailX-2'
                          {...formik.getFieldProps('email')}
                          className='form-control form-control-lg'
                        />
                      </div>

                      {formik.errors.email && formik.touched.email && (
                        <div
                          className={cn('alert alert-danger', styles.errorMsg)}
                          role='alert'
                        >
                          <p className={styles.emailMsg}>
                            {formik.errors.email &&
                              formik.touched.email &&
                              formik.errors.email}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className={styles.authBlock}>
                      <div
                        className={cn('form-outline mb-3', styles.authInput)}
                      >
                        <label
                          className={cn('form-label', styles.inputLabel)}
                          htmlFor='typePasswordX-2'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          id='typePasswordX-2'
                          className='form-control form-control-lg'
                          {...formik.getFieldProps('password')}
                        />
                      </div>
                      {formik.errors.password && formik.touched.password && (
                        <div
                          className={cn('alert alert-danger', styles.errorMsg)}
                          role='alert'
                        >
                          {formik.errors.password &&
                            formik.touched.password &&
                            formik.errors.password}
                        </div>
                      )}
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
