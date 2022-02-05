import { ErrorMessage, useField } from 'formik';
import { FC } from 'react';

type InputTextCustomProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [key: string]: any;
};

export const InputTextCustom: FC<InputTextCustomProps> = ({ label, ...rest }) => {
  const [field, meta] = useField(rest);
  return (
    <>
      <label htmlFor={rest.id || rest.name} className='block text-xs font-semibold text-gray-600 uppercase'>
        {label}
      </label>
      <input className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner' {...field} {...rest} />
      {/* {meta.touched && meta.error && <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{meta.error}</span>} */}
      <ErrorMessage name={rest.name} component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
    </>
  );
};
