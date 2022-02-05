import { ErrorMessage, useField } from 'formik';
import { FC } from 'react';

type InputCheckboxCustomProps = {
  label: string;
  name: string;
  [key: string]: any;
};

export const InputCheckboxCustom: FC<InputCheckboxCustomProps> = ({ label, ...rest }) => {
  const [field, meta] = useField({ ...rest, type: 'checkbox' });
  return (
    <>
      <label className='block text-xs font-semibold text-gray-600 uppercase my-2'>
        <input type='checkbox' {...field} {...rest} className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mr-2' />
        {label}
      </label>
      {/* {meta.touched && meta.error && <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{meta.error}</span>} */}

      <ErrorMessage name={rest.name} component='span' className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1' />
    </>
  );
};
