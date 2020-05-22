
import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    password,
    recaptcha,
    checkbox,
    address1,
    city,
    zipcode,
    country,
    state,
    countrycode,
    mobile,
    address2,
    otp,
    file,
    date,
    licence,
    file2,
    file3,
    choose,
    terms
  }
} = checkoutFormModel;
export default [
    Yup.object().shape({
      [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
      [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
      // [otp.name]: Yup.string().required(`${otp.requiredErrorMsg}`),

      [email.name]: Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid Email address).')
      .required(`${email.requiredErrorMsg}`),
      [password.name]: Yup.string() .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')

      .min(6, 'Password must be at least 6 characters')
      .required(`${password.requiredErrorMsg}`),
      // [recaptcha]: Yup.string().required(`${recaptcha.requiredErrorMsg}`),
      [checkbox.name]: Yup.bool().oneOf([true],(`${checkbox.requiredErrorMsg}`) ),
      [recaptcha]: Yup.bool().oneOf([true],'Recaptcha terms is required' )

    }),
    Yup.object().shape({
      [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
      [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        'len',
        `${zipcode.invalidErrorMsg}`,
        val => val && val.length === 5
      ),
      [city.name]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
      [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
      [address2.name]: Yup.string().required(`${address2.requiredErrorMsg}`),

      [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
      [mobile.name]: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

      , 'Inavlid Mobile Number.')
      .required(`${mobile.requiredErrorMsg}`),
      [countrycode.name]: Yup.string().nullable().required(`${countrycode.requiredErrorMsg}`),

    }),
    Yup.object().shape({
      [file.name]: Yup.string().nullable().required(`${file.requiredErrorMsg}`),
      [file2.name]: Yup.string().required(`${file2.requiredErrorMsg}`),
      [file3.name]: Yup.string().required(`${file3.requiredErrorMsg}`),
      [choose.name]: Yup.string().required(`${choose.requiredErrorMsg}`),
      [licence.name]: Yup.string().required(`${licence.requiredErrorMsg}`),
      [terms.name]: Yup.bool().oneOf([true],(`${checkbox.requiredErrorMsg}`) ),

      [date.name]: Yup.string().required(`${date.requiredErrorMsg}`),

    })
  
  ];