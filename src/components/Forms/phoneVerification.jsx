import React from 'react'
import { InputField, SelectField } from '../FormFields';
import { makeStyles } from '@material-ui/core/styles';

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
export default function PhoneVerification(props) {
    const classes = useStyles();

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
          mobile,
          countrycode,
        }
      } = props;
    return (
        <div className={classes.code}>
        <div className={classes.name}>
          <label>Country code*</label>
        <SelectField
          name={countrycode.name}
          label={countrycode.label}
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
    )
}
