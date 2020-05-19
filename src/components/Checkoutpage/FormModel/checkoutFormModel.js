
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
     checkbox:{
       name:'checkbox',
       requiredErrorMsg: 'terms is required'

     },
      recaptcha: {
        name: 'recaptcha',
        requiredErrorMsg: 'captcha verification required'

      },
      address1: {
        name: 'address1',
        label: 'Address Line 1*',
        requiredErrorMsg: 'Address Line 1 is required'
      },
      address2: {
        name: 'address2',
        label: 'Address Line 2'
      },
      city: {
        name: 'city',
        label: 'City*',
        requiredErrorMsg: 'City is required'
      },
      state: {
        name: 'state',
        label: 'State/Province/Region'
      },
      zipcode: {
        name: 'zipcode',
        label: 'Zipcode*',
        requiredErrorMsg: 'Zipcode is required',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      country: {
        name: 'country',
        label: 'Country*',
        requiredErrorMsg: 'Country is required'
      },
      countrycode: {
        name: 'country',
        label: 'Country*',
        requiredErrorMsg: 'Country is required'
      },
      mobile: {
        name: 'mobile',
        label: 'Mobile*',
        requiredErrorMsg: 'mobile is required'
      },


    }
};