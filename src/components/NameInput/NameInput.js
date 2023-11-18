import { Formik, Field, ErrorMessage } from 'formik';
import { StyledForm } from './NameInput.styled';
import * as Yup from 'yup';

const NameInputSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('Required'),
  number: Yup.number().required('Required'),
});

export const NameInput = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={NameInputSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Number" />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
