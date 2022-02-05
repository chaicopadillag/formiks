import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputTextCustom } from '../components';

function RegisterFormikPage() {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    'password-confirm': '',
  };
  const validationSchema = Yup.object({
    firstname: Yup.string().min(2, 'Minimo de 2 caracteres').max(15, 'Must be 15 characters or less').required('Required'),
    lastname: Yup.string().min(2, 'Min 2 caracteres').max(20, 'Must be 20 characters or less').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
    'password-confirm': Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 className='text-xl font-semibold text-center'>Formik Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className='mt-6'>
              <div className='flex justify-between gap-3'>
                <div className='w-1/2'>
                  <InputTextCustom label='First Name' name='firstname' placeholder='First Name' />
                </div>
                <div className='w-1/2'>
                  <InputTextCustom label='Last Name' name='lastname' placeholder='Last Name' />
                </div>
              </div>
              <InputTextCustom label='E-mail' name='email' placeholder='E-mail' />
              <InputTextCustom label='Password' name='password' placeholder='Password' />
              <InputTextCustom label='Password confirm' name='password-confirm' placeholder='Confirm password' />
              <button
                type='submit'
                className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterFormikPage;
