import React,{useEffect} from 'react';
import { InputField, CheckboxField } from '../FormFields';
import Recaptcha from 'react-recaptcha'
import { render } from 'react-dom';

export default function Signup(props) {

    const {
      formField: {
        firstName,
        lastName,
        email,
        password,
        recaptcha,
        checkbox
      }
    } = props;


  
    return (
        <React.Fragment>
          
         <div className='information'>
            <p> <span className='icon'><i class="fas fa-clock"></i></span ><span className='text'>Once submitted,your profile cannot be changed.Please ensure<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that your information is correct.</span></p>
         </div>
          <div className='input'>
                  <label>Firstname*</label>
              <InputField name={firstName.name}  fullWidth  />
              </div>
              <div className='input'>
            <label>Lastname*</label>
              <InputField name={lastName.name}  fullWidth />
              </div>
              <div className='input'>
              <label>Email*</label>
              <InputField name={email.name} fullWidth />
              </div>
              <div className='input'>
              <label>Password*</label>
              <InputField name={password.name}  fullWidth />
              </div>
             <div>
             <div className='check'>
             <CheckboxField
            name={checkbox.name}
            label={checkbox.label}
          />
          </div>
             <div className='input'>
             <Recaptcha
             name={recaptcha.name}
                  sitekey="6LeAmvUUAAAAAAGQO7STC7xWUiK4pFSwvkeBYvpq "
                  render="explicit"
                  theme="light"
                  // verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                  onloadCallback={() => { console.log("done loading!"); }}
                />
                </div>
           

             </div>
           
        </React.Fragment>
      );
    }