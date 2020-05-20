import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import '../../App.css'
import { Formik, Form } from 'formik';
// import Styles from './Styles';
import Signup from '../Forms/Signup';
import PersonalDetails from '../Forms/PersonalDetails'
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import CheckoutSuccess from './CheckoutSuccess/CheckoutSucess'
import VerifyID from '../Forms/VerifyId'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root:{

    '& svg':{
      fontSize:'60px',
      color:'rgba(0, 156, 222, 0.3)',
      
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent"
    },
    "& .MuiStepConnector-alternativeLabel": {
      top: '14px',
      left: 'calc(-29% + 20px)',
      right: 'calc(70% + 20px)',
      position: 'absolute',
      color:'#637696',
    
  },
  "& .MuiStepIcon-root.MuiStepIcon-active": {
    color: '#009cde'
}
    
  },
  button:{
    background:'#86c306',
   
    width:'100%',
    color:'white',
    borderRadius:'15px',
    height:'45px',
    outline:'none',
    marginTop:'20px'
  },
  h:{
    fontSize:'48px',
    textAlign:'center',
    margin:'0',
    padding:'0'
  }
});
const steps = ['Account setup', 'Personal details', 'Verify ID'];


const { formId, formField } = checkoutFormModel;
function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Signup formField={formField} />;
    case 1:
      return <PersonalDetails formField={formField} />;
    case 2:
      return <VerifyID/>;
    default:
      return <div>Not Found</div>;
  }
}
console.log(formField)
export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
//  console.log(currentValidationSchema)

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }
  function _handleNext() {
      console.log("shhsh")
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    }
    // else if(activeStep==0){
    //   actions.setTouched({});
    //   actions.setSubmitting(false);
    //   setotp(true)
    // }
     else{
      
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
console.log(activeStep+1)
 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const[otpp,setotp]=useState(false)

  return (
    <React.Fragment>
<h1 className={classes.h}>
        Create account
        </h1>
      <Stepper activeStep={activeStep} className={classes.root} alternativeLabel>
        {steps.map(label => (
          <Step key={label}
         className={classes.completed}>
            <StepLabel 
            className={classes.root}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >Continue
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}