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
import PhoneVerification from '../Forms/phoneVerification'
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



export default function CheckoutPage() {
  const { formId, formField } = checkoutFormModel;
function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Signup formField={formField} toggle={toggle}   />;
    case 1:
      return <PersonalDetails formField={formField} phoneverify={phoneverify} />
      ;
    case 2:
      return <VerifyID/>;
    default:
      return <div>Not Found</div>;
  }
}
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

//  console.log(currentValidationSchema)
const[toggle,settoggle]=useState(false)
const[phoneverify,setphoneverify]=useState(false)

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    localStorage.setItem('values', [JSON.stringify(values)]);

    setActiveStep(activeStep + 1);
  }
  function _handleNext() {
      console.log("shhsh")
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
   
  function _handleSubmit(values, actions) {
    // debugger
    if (isLastStep) {
      _submitForm(values, actions);
    }
    
    // debugger 
    if(!phoneverify){
       
    setphoneverify(true)
    return
    }

         if(!toggle){
           settoggle(true) 
           return    
             }
             
     else{
      
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      // actions.setSubmitting(false);
    }
  }
console.log(activeStep+1)
 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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
                      // disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      CONTINUE
                      {/* {(!toggle)?'CONTINUE':'RESEND CODE'} */}
                    </Button>
                    {/* {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )} */}
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