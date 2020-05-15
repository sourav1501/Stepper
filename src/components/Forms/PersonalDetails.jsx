import React from 'react';
import { InputField, CheckboxField, SelectField } from '../FormFields';
import { Grid } from '@material-ui/core';

export default function PersonalDetails(props) {
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
      value: null,
      label: 'None'
    },
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
      states,
      cities,
      countrycode,
    }
  } = props;
    return (
        <React.Fragment>
          
          
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
          
          <InputField name={address1.name} label={address1.label} fullWidth />
          <InputField name={address2.name} label={address2.label} fullWidth />
   
          <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        <Grid item xs={12} sm={6}>
          <SelectField
            name={countrycode.name}
            label={countrycode.label}
            data={countrycodes}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <inputField
            name={mobile.name}
            label={mobile.label}
            
            fullWidth
          />
        </Grid>
           
        </React.Fragment>
      );
    }