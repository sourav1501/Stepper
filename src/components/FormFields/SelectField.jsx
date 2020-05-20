 
import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root:{
    margin:'10px 0',
    border:'none',
    outline:'none',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent"
    },
    "&  .MuiSelect-outlined.MuiSelect-outlined": {
      paddingRight: '32px',
      borderColor: "transparent"

  },
  '& .MuiOutlinedInput-input':{
    borderColor: "transparent",
    padding:'14px 14px',
    border:'none',
    background:'#fbfeff',
    '& :focus':{
      boxShadow: '0 0 15px 0 rgba(0, 156, 222, 0.2);',
      background:'white',
      border:'none'

    },
  },

  " .MuiSelect-outlined":{
    borderColor: "transparent",

  },
    "& .makeStyles-root-264":{
      borderColor: "transparent",
      margin: '10px 0',
      outline: 'none',
      background:'#fbfeff',
      borderColor: "transparent"


  },
    // '& input':{
    
    //   padding: "14px 9px",
    //   background:'#fbfeff',
    //   borderRadius:'10px'
      
    // },
    '& input:focus':{
      boxShadow: '0 0 15px 0 rgba(0, 156, 222, 0.2);',
      background:'white',
      border:'none'

    },
    '& MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input':{
      border:'transparent',
      borderColor: "transparent",

    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid white",
      borderColor: "transparent",

    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      // border: "1px solid #white",
      borderRadius: "10px",
      boxShadow: '0 0 15px 0 rgba(0, 156, 222, 0.2);',

    },
    
    

  }

});
function SelectField(props) {
  const classes = useStyles();

  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <Select {...field} value={selectedValue ? selectedValue : ''} variant="outlined" className={classes.root}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;