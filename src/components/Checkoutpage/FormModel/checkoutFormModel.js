
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
      otp: {
        name: 'otp',
        label: 'Last name*',
        requiredErrorMsg: 'otp is required'
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
       label:'By clicking Continue you agree to our Terms,Cookies Policy and Privacy Policy . You may recieve email and SMS notifications from us and can opt out at any time.',
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
        label: 'State/Province/Region',
        requiredErrorMsg: 'State is required'

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
        requiredErrorMsg: 'Phone no is required'
      },


    }
};