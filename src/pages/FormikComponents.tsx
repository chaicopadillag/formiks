import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikComponents() {
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
    password: Yup.string().min(3, 'Must be 8 characters or more').required('Required'),
    'password-confirm': Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    terms: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
    title: Yup.string().required('Required'),
  });
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 className='text-xl font-semibold'>Formik Components</h1>
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
                <span className='w-1/2'>
                  <label htmlFor='firstname' className='block text-xs font-semibold text-gray-600 uppercase'>
                    Firstname
                  </label>
                  <Field
                    type='text'
                    name='firstname'
                    className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                  />
                  <ErrorMessage name='firstname' component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
                </span>
                <span className='w-1/2'>
                  <label htmlFor='lastname' className='block text-xs font-semibold text-gray-600 uppercase'>
                    Lastname
                  </label>
                  <Field
                    type='text'
                    name='lastname'
                    className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                  />
                  <ErrorMessage name='lastname' component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
                </span>
              </div>
              <label htmlFor='email' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
                E-mail
              </label>
              <Field type='text' name='email' className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner' />
              <ErrorMessage name='email' component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
              <label htmlFor='email' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
                Job Type
              </label>
              <Field as='select' name='title' className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'>
                <option value=''>Select</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='other'>Other</option>
              </Field>
              <ErrorMessage name='title' component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
              <label htmlFor='password' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
                Password
              </label>
              <Field
                type='text'
                name='password'
                className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
              />
              <ErrorMessage name='password' component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
              <label htmlFor='password-confirm' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
                Confirm password
              </label>
              <Field
                type='text'
                name='password-confirm'
                className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
              />
              <ErrorMessage name='password-confirm' component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
              <label className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
                <Field type='checkbox' name='terms' className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mr-2' />
                Acepto los terminos y condiciones
              </label>
              <ErrorMessage name='terms' component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
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

export default FormikComponents;
