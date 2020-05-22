import React from 'react';
import { FileField, DateField, SelectField, InputField,CheckboxField } from '../FormFields';
// import { date } from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import PhoneVerification from './phoneVerification'
const useStyles = makeStyles((theme) => ({
  check:{
marginTop:'70px',

'& a':{
  color:'#009cde',
  textDecoration:'none'
},
  },
  statecity: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'

  },
  state: {
    width: '100%',
    marginTop:'10px'

  },
  city: {
    width: '48%'
  },
  code: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'

  },
  name: {
    width: '32%'
  },
  mobile: {
    width: '65%'
  },
  file:{
    margin:'10px 0',
    '& input':{
      margin:'10px 0',
      fontSize:'16px',
      borderRadius:'10px',
      background:'#009cde'
    }
  }



}));
export default function VerifYID(props) {
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
  const {
    formField: {
      file,
      date,
      file2,
      file3,
      choose,
      licence,
      terms
    }
  } = props;
  return (
    <React.Fragment>
      <div className={classes.input}>
        <label>Date of birth*</label>
        <DateField name={date.name}  fullWidth/>
      </div>
      <div className={choose}>
        <label>Choose Method*</label>
        <SelectField
          name={choose.name}
          data={countries}
          fullWidth
        />
      </div>
      <div className={classes.file}>
        <label>Driving license front photo*</label><br></br>
        <FileField id="file" name={file.name}
          className="form-control" />
      </div>

      <div className={classes.file}>
        <label>Driving license back photo*</label><br></br>
        <FileField id="file" name={file2.name}
          className="form-control" />
      </div>
      <div className={classes.file}>
        <label>Selfie holding ID doc and note*</label><br></br>
        <FileField id="file" name={file3.name}
          // setFieldValue("file", event.currentTarget.files[0]);
          className="form-control" />
      </div>
      <div className={classes.state}>
           <label> Driving licence number*</label>
          <InputField
            name={licence.name}
            fullWidth
          />
          </div>
          <div className={classes.check}>
             <CheckboxField
            name={terms.name}
            label={terms.label}
          />
          </div>
    </React.Fragment>
  );
}