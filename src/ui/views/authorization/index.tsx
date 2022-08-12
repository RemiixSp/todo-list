import React from 'react';
import styles from '../../pages/authorization/authorization.module.scss';
import { Formik } from 'formik';
import * as yup from 'yup';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../core/store/authorization';
import { useDispatch } from 'react-redux';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import { useAppSelector } from '../../../core/store/store';

const AuthorizationView = () => {
  const navigate = useNavigate();

  const auth = useAppSelector((state) => state.login);

  const dispatch = useDispatch();

  useUpdateEffect(() => {
    const json = JSON.stringify(auth);
    localStorage.setItem('user', json);
  }, [auth]);

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

  const formikInitialState = { email: '', password: '' };

  return (
    <div className={styles.authorizationContainer}>
      <section className='vh-80'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div className='card shadow-2-strong'>
                <div className='card-body p-5 text-center'>
                  <h3 className='mb-5'>Sign in</h3>
                  <Formik
                    initialValues={formikInitialState}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        dispatch(login(values.email));
                        navigate('/');

                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className={styles.authBlock}>
                          <div
                            className={cn(
                              'form-outline mb-3',
                              styles.authInput
                            )}
                          >
                            <label
                              className={cn('form-label', styles.inputLabel)}
                              htmlFor='typeEmailX-2'
                            >
                              Email
                            </label>
                            <input
                              type='email'
                              name='email'
                              id='typeEmailX-2'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className='form-control form-control-lg'
                            />
                          </div>

                          {errors.email && touched.email && (
                            <div
                              className={cn(
                                'alert alert-danger',
                                styles.errorMsg
                              )}
                              role='alert'
                            >
                              {errors.email && touched.email && errors.email}
                            </div>
                          )}
                        </div>

                        <div className={styles.authBlock}>
                          <div
                            className={cn(
                              'form-outline mb-3',
                              styles.authInput
                            )}
                          >
                            <label
                              className={cn('form-label', styles.inputLabel)}
                              htmlFor='typePasswordX-2'
                            >
                              Password
                            </label>
                            <input
                              type='password'
                              name='password'
                              id='typePasswordX-2'
                              className='form-control form-control-lg'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                          </div>
                          {errors.password && touched.password && (
                            <div
                              className={cn(
                                'alert alert-danger',
                                styles.errorMsg
                              )}
                              role='alert'
                            >
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </div>
                          )}
                        </div>

                        <button
                          className='btn btn-primary btn-lg btn-block'
                          type='submit'
                          disabled={isSubmitting}
                        >
                          Login
                        </button>
                      </form>
                    )}
                  </Formik>
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
