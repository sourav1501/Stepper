import React from 'react';
import { at } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css'
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
  border:'1px solid black',
  borderRadius:'10px',
  width:'100%',

  font: 'inherit',
    color: 'currentColor',
    width: '100%',
   
    height: '1.1876em',
    margin: '0',
    display: 'block',
    padding: '6px 0 7px',
    
    background: 'none',
    boxSizing: 'content-box',

  },
}));

export default function InputField(props) {
  const classes = useStyles();
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
     
    <TextField
               id="standard-error-helper-text"

      type="text"
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
     

    />
 
  );
}