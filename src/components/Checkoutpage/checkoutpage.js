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
import useStyles from './Styles';
import Signup from '../Forms/Signup';
import PersonalDetails from '../Forms/PersonalDetails'
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import CheckoutSuccess from './CheckoutSuccess/CheckoutSucess'
import VerifyID from '../Forms/VerifyId'
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

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
 

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
    } else{
        
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Create account
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
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
                  {/* {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )} */}
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