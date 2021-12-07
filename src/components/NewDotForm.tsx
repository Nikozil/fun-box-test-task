import { Field, Form, Formik } from 'formik';
import React from 'react';
import styles from '../styles/NewDotForm.module.scss';

const NewDotForm: React.FC<Props> = ({ handleSubmit }) => {
  const initialValues: MyFormValues = {
    newDot: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmit(values.newDot);
        resetForm();
      }}>
      {({ setFieldValue }) => (
        <Form className={styles['new-dot-form']}>
          <label htmlFor="newDot" className={styles['new-dot-form__label']}>
            Введите метку:
          </label>
          <Field
            id="newDot"
            name="newDot"
            placeholder="Новая метка"
            type="text"
            autoComplete="off"
            className={styles['new-dot-form__input']}
          />
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(NewDotForm);

interface MyFormValues {
  newDot: string;
}
interface Props {
  handleSubmit: (newDot: string) => void;
}
