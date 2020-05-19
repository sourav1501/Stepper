import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo-element-01.png'
const useStyles = makeStyles((theme) => ({
    wrapper:{
       
            width:'100%',
            height: '220px',
            
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
    width: '50%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  branding:{
    
      '& a':{
       

        display:'flex',
        alignItems:'center',
      textDecoration:'none',
      fontSize:'30px',
    
      color:'black',
      fontWeight:'bold'
      }
  },
  line:{
        width: '1px',
        height: '35px',
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
        width: '50%',
        display:'flex',
        justifyContent:'flex-end'
       
      },
      login:{
              color:'#009cde',
            width: '110px',
            height: '46px',
            borderRadius: '23px',
            border: 'solid 1px #009cde',
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
             <a href="#"><img src={logo} alt=''/>&nbsp;xcoins</a>
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
 
 