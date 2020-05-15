import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    wrapper:{
       
            width:'100%',
            height: '350px',
            
            backgroundImage: 'linear-gradient(to bottom, #f6fcff, #ffffff 96%)',
          
    },
  container: {
    width: '70%',
    margin:'0 auto',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'30px 0'

  },
  innerleft: {
    width: '45%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  branding:{
      '& a':{
      textDecoration:'none',
      fontSize:'20px',
      color:'black',
      fontWeight:'bold'
      }
  },
  line:{
        width: '1px',
        height: '32px',
        opacity: '0.15',
        backgroundColor: '#abb5c7',
      margin:'0',
      padding:'0'
  },

  nav:{
    display:'flex',
    listStyle:'none',
    margin:'0',
    padding:'0',
    '& li':{
        margin:'0 14px'
    },
    '& a':{ 
            
            fontSize: '13px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.67',
            letterSpacing: '1px',
            color: '#3a4e6f',
            textDecoration:'none' 
    },
   
      
    },
    innerright: {
        width: '55%',
        display:'flex',
        justifyContent:'flex-end'
       
      },
      login:{
              color:'#009cde',
            width: '110px',
            height: '46px',
            borderRadius: '23px',
            border: 'solid 1nppx #009cde',
             outline:'none',
             cursor:'pointer',
             background:'transparent',
             marginRight:'16px',
             fontWeight:'bold'

      },
    signup:{
        color:'#009cde',
      width: '110px',
      height: '46px',
      borderRadius: '23px',
       outline:'none',
       cursor:'pointer',
       border:'none',
       background:'transparent',
       backgroundColor: '#ddf2fc' ,
       fontWeight:'bold'
}

 
}));

export default function Header(){
    const classes = useStyles();
return (
<React.Fragment>
    <div className={classes.wrapper}>
    <div className={classes.container}>
     <div className={classes.innerleft}>
            <div className={classes.branding}>
             <a href="#">XCOINS</a>
             </div>
              <div className={classes.line}>

              </div>
          <ul className={classes.nav}>
              <li>
                  <a href='#'>BUY BITCOIN</a>
              </li>
              <li>
                  <a href='#'>SELL BITCOIN</a>
              </li>
              <li>
                  <a href='#'>BLOG</a>
              </li>
              <li>
                  <a href='#'>ABOUT US</a>
              </li>
          </ul>
     

       </div>
     <div className={classes.innerright}>
         <button className={classes.login}>LOGIN</button>
         <button className={classes.signup}>Sign UP</button>
         </div>



    </div>
    </div>
</React.Fragment>
);}
 
 