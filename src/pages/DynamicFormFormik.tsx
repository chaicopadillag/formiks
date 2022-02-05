import { Form, Formik } from 'formik';
import { InputTextCustom, SelectCustom } from '../components';
import formJson from '../data/custom-fields.json';

const DynamicFormFormik = () => {
  const initialValues: { [key: string]: any } = {};

  for (const { name, value } of formJson) {
    initialValues[name] = value;
  }

  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h2 className='text-xl font-semibold text-center'>Dynamic Form</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              {formJson.map(({ label, name, placeholder, type, value, options }) => {
                if (type === 'select') {
                  return (
                    <SelectCustom label={label} name={name} key={name}>
                      <option value=''>Select</option>
                      {options?.map(({ label, value }) => (
                        <option value={value} key={value}>
                          {label}
                        </option>
                      ))}
                    </SelectCustom>
                  );
                }
                return <InputTextCustom key={name} type={type as any} label={label} name={name} placeholder={placeholder} />;
              })}
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
};

export default DynamicFormFormik;
