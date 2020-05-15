
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
  }
} = checkoutFormModel;
export default [
    Yup.object().shape({
      [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
      [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
      [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
      [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
      [recaptcha]: Yup.string().required(`${recaptcha.requiredErrorMsg}`),
      [checkbox]: Yup.string().required()
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
      [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
      [mobile.name]: Yup.string().required(`${mobile.requiredErrorMsg}`),

    }),
    
  
  ];