import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikYupPage() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      'password-confirm': '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstname: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      lastname: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
      'password-confirm': Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
  });
  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 className='text-xl font-semibold'>Formik useFormik + Yup</h1>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='flex justify-between gap-3'>
            <span className='w-1/2'>
              <label htmlFor='firstname' className='block text-xs font-semibold text-gray-600 uppercase'>
                Firstname
              </label>
              <input
                id='firstname'
                type='text'
                placeholder='John'
                autoComplete='given-name'
                className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                {...getFieldProps('firstname')}
              />
              {touched.firstname && errors.firstname && <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{errors.firstname}</span>}
            </span>
            <span className='w-1/2'>
              <label htmlFor='lastname' className='block text-xs font-semibold text-gray-600 uppercase'>
                Lastname
              </label>
              <input
                id='lastname'
                type='text'
                placeholder='Doe'
                autoComplete='family-name'
                className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
                {...getFieldProps('lastname')}
              />
              {touched.lastname && errors.lastname && <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{errors.lastname}</span>}
            </span>
          </div>
          <label htmlFor='email' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
            E-mail
          </label>
          <input
            id='email'
            type='email'
            placeholder='john.doe@company.com'
            autoComplete='email'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
            {...getFieldProps('email')}
          />
          {touched.email && errors.email && <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{errors.email}</span>}
          <label htmlFor='password' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='********'
            autoComplete='new-password'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
            {...getFieldProps('password')}
          />
          {touched.password && errors.password && <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{errors.password}</span>}
          <label htmlFor='password-confirm' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>
            Confirm password
          </label>
          <input
            id='password-confirm'
            type='password'
            placeholder='********'
            autoComplete='new-password'
            className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
            {...getFieldProps('password-confirm')}
          />
          {touched['password-confirm'] && errors['password-confirm'] && (
            <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{errors['password-confirm']}</span>
          )}
          <button
            type='submit'
            className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'
          >
            Sign up
          </button>
          <p className='flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black'>Already registered?</p>
        </form>
      </div>
    </div>
  );
}

export default FormikYupPage;
