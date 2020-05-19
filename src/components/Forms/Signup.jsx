import React,{useEffect} from 'react';
import { InputField, CheckboxField } from '../FormFields';
import Recaptcha from 'react-recaptcha'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  check:{
    display:'flex',
alignItems:'center',

'& a':{
  color:'#009cde',
  textDecoration:'none'
},

},
label:{
  marginLeft:'10px'
},
information:{
 display:'flex',
 alignItems:'center',
 height: '72px',
 background:'#fdf9e8',
margin:'20px 0', 
 borderRadius:'7px'
  
},
icon:{
  padding: '0 15px ',
color:'#e6b413',
fontSize:'18px'
},
text:{
  color:'#e6b413',
  fontSize:'14px',
  fontWeight:'bold',
  lineHeight:'1.57'
  
}

 
}));
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


    const classes = useStyles();

    return (
      
        <React.Fragment>
         <div className={classes.information}>
            <div className={classes.icon}><i class="fas fa-clock"></i></div>
            <div className={classes.text}>Once submitted,your profile cannot be changed.Please ensure <br></br>that your information is correct.</div>
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
             <div className={classes.check}>
             <CheckboxField
            name={checkbox.name}
            
          /><label className={classes.label}>By clicking Continue you agree to our <a href='#'>Terms,Cookies Policy</a> and <a href="#">Privacy Policy</a> . You may recieve email and SMS notifications from us and can opt out at any time.</label>
          </div>
             <div className='input'>
             <Recaptcha
            
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