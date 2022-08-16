import React from 'react';
import styles from './todoForm.module.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Status } from '../../../core/store/todo/types';
import { useAppSelector } from '../../../core/store/store';
import { addTask } from '../../../core/store/todo';
import cn from 'classnames';

const TodoForm = () => {
  const allTasks = useAppSelector((state) => state.todo);

  const darkTheme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const initialValues = {
    textField: '',
  };

  const validationSchema = yup.object().shape({
    textField: yup
      .string()
      .required('Todo description is required')
      .matches(
        /^[a-zA-Z0-9~@.\s]+$/,
        'Only alphabets and numbers are allowed for this field '
      )
      .min(10, 'Too short message')
      .max(200, 'Too long message'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('hello');
      const newTodo = {
        id: nanoid(),
        description: values.textField,
        status: Status.LISTED,
      };
      if (
        !allTasks.listedTasks?.find(
          (obj) => obj.description === values.textField
        )
      ) {
        dispatch(addTask(newTodo));
      }
    },
  });

  return (
    <div className={cn(styles.addContainer, { [styles.darkTheme]: darkTheme })}>
      <h2>Add task</h2>
      <form onSubmit={formik.handleSubmit}>
        <textarea
          id='textField'
          {...formik.getFieldProps('textField')}
          className={styles.todoDescription}
          placeholder='Enter to-do you want to add'
        />

        <button className={styles.addTask} type='submit'>
          Submit
        </button>
        {formik.errors.textField && formik.touched.textField && (
          <div
            className={cn('alert alert-danger', styles.errorMsg)}
            role='alert'
          >
            {formik.errors.textField &&
              formik.touched.textField &&
              formik.errors.textField}
          </div>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
