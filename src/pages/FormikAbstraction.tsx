import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputTextCustom, InputCheckboxCustom, SelectCustom } from '../components';
function FormikAbstraction() {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    'password-confirm': '',
    terms: false,
    title: '',
  };
  const validationSchema = Yup.object({
    firstname: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastname: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(3, 'Must be 3 characters or more').required('Required'),
    'password-confirm': Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    terms: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
    title: Yup.string().required('Required'),
  });
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 className='text-xl font-semibold'>Formik Abstraction</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className='mt-6'>
              <div className='flex justify-between gap-3'>
                <div className='w-1/2'>
                  <InputTextCustom label='First name' name='firstname' placeholder='First Name' />
                </div>
                <div className='w-1/2'>
                  <InputTextCustom label='Last name' name='lastname' placeholder='Last Name' />
                </div>
              </div>
              <InputTextCustom label='E-mail' name='email' placeholder='E-mail' type='email' />
              <SelectCustom label='Job Type' name='title'>
                <option value=''>Select</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='other'>Other</option>
              </SelectCustom>
              <InputTextCustom label='Password' name='password' placeholder='Password' type='password' />
              <InputTextCustom label='Confirm Password' name='password-confirm' placeholder='Confirm Password' />
              <InputCheckboxCustom label='Acepto los terminos y condiciones' name='terms' />
              <button
                type='submit'
                className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'
              >
                Sign up
              </button>
              <p className='flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black'>Already registered?</p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormikAbstraction;
