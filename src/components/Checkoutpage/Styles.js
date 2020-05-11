import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
   
    '& svg':{
      fontSize:'55px',
      
    }
  },
  buttons: {
   
    width:'100%',
  },
  button: {
    background:'#86c306',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width:'100%',
    color:'white',
    borderRadius:'15px',
    height:'45px'

  },
MuiStepIcon:{
    fontSize: '50px'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));