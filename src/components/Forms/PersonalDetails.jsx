import React from 'react';
import { InputField, CheckboxField, SelectField } from '../FormFields';
import { makeStyles } from '@material-ui/core/styles';
import PhoneVerification from './phoneVerification'
const useStyles = makeStyles((theme) => ({

statecity:{
  display:'flex',
  justifyContent:'space-between',
  width:'100%'
 
},
state:{
  width:'48%'
},
city:{
  width:'48%'
},
code:{
  display:'flex',
  justifyContent:'space-between',
  width:'100%'
 
},
name:{
  width:'32%'
},
mobile:{
  width:'65%'
}


 
}));
export default function PersonalDetails(props) {
  const classes = useStyles();

  const countries = [
    {
      value: null,
      label: 'None'
    },
    {
      value: '111',
      label: 'United States'
    },
    {
      value: '222',
      label: 'Italy'
    },
    {
      value: '333',
      label: 'Vietnam'
    }
  ];
  const countrycodes = [
  
    {
      value: '111',
      label: 'US'
    },
    {
      value: '222',
      label: 'IN'
    },
    {
      value: '333',
      label: 'IT'
    }
  ];
  
  const {
    formField: {
     
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      mobile,
      
      countrycode,
    }
  } = props;
    return (
        <React.Fragment>
           {!props.phoneverify?(
            <div>
          <div className={country}>
            <label>Country*</label>
          <SelectField
            name={country.name}
            data={countries}
            fullWidth
          />
          </div>
          <div className='input'>
            <label>First line address*</label>
          <InputField name={address1.name} fullWidth />
          </div>
          <div className='input'>
          <label>Second line address*</label>
          <InputField name={address2.name}  fullWidth />
          </div>


            < div className={classes.statecity}>
         <div className={classes.state}>
           <label>State*</label>
          <InputField
            name={state.name}
            fullWidth
          />
          </div>
       <div className={classes.city}>
       <label>City*</label>
       
          <InputField
            name={city.name}
            fullWidth
          />
          </div>
          </div>
        <div className="input">
          <label>Zip code/Post code*</label>
        <InputField name={zipcode.name}  fullWidth />
        </div>
        <div className={classes.code}>
          <div className={classes.name}>
            <label>Country code*</label>
          <SelectField
            name={countrycode.name}
            data={countrycodes}
            fullWidth
          />
          </div>
       <div className={classes.mobile}>
         <label>Phone number*</label>
          <InputField
            name={mobile.name}
            
            
            fullWidth
          />
          </div>
          </div>
         </div>
           ):(
       
           <div>
               
               sjsjsj
               </div>
           
           )  
} 
        </React.Fragment>
      );
    }