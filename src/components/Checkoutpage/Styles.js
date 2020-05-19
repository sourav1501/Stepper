import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
   
    '& svg':{
      fontSize:'60px',
      color:'#fbfeff',
      
    },
    '& Line':{
      top: '13px',
      left: 'calc(-33% + 20px)',
      right: 'calc(70% + 20px)',
      position: 'absolute',
    },
  
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
    height:'45px',
    outline:'none'

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
  },
  h:{
    fontSize:'48px',
    textAlign:'center',
    margin:'0',
    padding:'0'
  },
  iconRoot: {
    backgroundColor: "green",
    color: "white",
    borderRadius: "50%",
    padding: 5
  },
  completed: {
    color: "red"
  },
  MuiStepConnectoralternativeLabel:{
    top: '13px',
    left: 'calc(-33% + 20px)',
    right: 'calc(70% + 20px)',
    position: 'absolute',
}

}));