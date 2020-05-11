
export default {
    formId: 'checkoutForm',
    formField: {
      firstName: {
        name: 'firstName',
        label: 'First name*',
        requiredErrorMsg: 'First name is required'
      },
      lastName: {
        name: 'lastName',
        label: 'Last name*',
        requiredErrorMsg: 'Last name is required'
      },
      email: {
        name: 'email',
        label: 'Email*',
        requiredErrorMsg: 'Email is required'
      },
      password: {
        name: 'password',
        label: 'Password*',
        requiredErrorMsg: 'Password is required'
      },
      checkbox: {
        name: 'signup',
        label: `By clicking Continue you agree to our Terms,Cookies Policy and Privacy Policy.You may recieve email and SMS notifications from us and can opt out at any time.`
      },
      recaptcha: {
        name: 'recaptcha',
        requiredErrorMsg: 'captcha'

      },

    }
};