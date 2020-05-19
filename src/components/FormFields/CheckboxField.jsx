import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { withStyles } from '@material-ui/core/styles';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@material-ui/core';
const styles = {
  root:{
    marginTop:'-19px',
    border:'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& icon': {
     
      backgroundColor: '#f5f8fa',
     
  },
},
error:{
  color:'red'
}

};
 function CheckboxField(props) {
  const { label, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;

   function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText className={props.classes.error}>{error}</FormHelperText>;
    }
  }

  function _onChange(e) {
    setValue(e.target.checked);
  }

  return (
    <React.Fragment>
    <FormControl {...rest}>
      <FormControlLabel
            className={props.classes.root}

        value={field.checked}
        checked={field.checked}
        control={<Checkbox {...field} onChange={_onChange} />}
        label={label}
      />
      
    </FormControl>
    <div>
    {_renderHelperText()}
    </div>
    </React.Fragment>
  );
}
export default withStyles(styles)(CheckboxField);