import React from 'react';
import { at } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import '../../App.css'
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root:{
    margin:'10px 0',
    border:'none',
    outline:'none',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent"
    },
    '& input':{
      padding: "14px 9px",
      background:'#fbfeff',
      borderRadius:'10px'
      
    },
    '& input:focus':{
      boxShadow: '0 0 15px 0 rgba(0, 156, 222, 0.2);',
      background:'white',
      border:'none'

    },
    
    

  }

});

 function InputField(props) {

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
     className={classes.root}
      type="text"
      error={meta.touched && meta.error && true}
      variant="outlined"
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />


 
  );
}

export default InputField;