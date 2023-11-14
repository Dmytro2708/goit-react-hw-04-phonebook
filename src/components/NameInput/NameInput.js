import { Formik, Field, ErrorMessage } from 'formik';
import { StyledForm } from './NameInput.styled';
import * as Yup from 'yup';
 
const NameInputSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
    number: Yup.number()
    .required('Required'),
});



export const NameInput = ({ addstate, state }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}

      validationSchema={NameInputSchema}
      onSubmit={(values, actions) => {
        let check = state.contacts.find(e => e.name === values.name);

        if (check === undefined) {
          actions.resetForm();

          addstate(values);
        } else {
          alert(`"${values.name}" is alredy in contacts`);
        }
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name"/>
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Number" />
          <ErrorMessage name="number"/>
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
