
import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    password,
    recaptcha,
    checkbox
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
  
  ];