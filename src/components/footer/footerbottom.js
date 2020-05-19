import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
    wrapper:{
      width:'70%',
      margin:'0px auto',
     marginTop:'120px'
    },
    text:{
        
color:'#637696',
        fontSize: '15px',
     fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.57',
  letterSpacing: 'normal',
  padding:'40px 0'
    },
  ulfooter:{
    display:'flex',
    justifyContent:'space-between',
    width:'48%',
    margin:'0',
    padding:'0',
    listStyle:'none',
    '& a':{
        textDecoration:'none',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
         lineHeight: '1.57',
         letterSpacing: 'normal',
         color:'#637696'
    }

  },
  nav:{
      width:'50%',
      display:'flex',
      justifyContent:'flex-end'
  }

 
 
}));

export default function Footerbottom(){
    const classes = useStyles();
    const{listOpen, setList} =useState(true) 

return (
    <React.Fragment>
    <div className={classes.wrapper}>
      
       <ul className={classes.ulfooter}>
                        <li>
                            <a href="#">&copy;Xcoins.com</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Legal notice</a>
                        </li>
                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
      
       <div className={classes.nav}>
      
   
           </div>
           <div className={classes.text}>
        <p>Xcoins is property of CF Technologies Ltd-Company #2046169704 East,Level 8,Sliema Road,GZR1639,Malta.All trademarks and copyrights belong to their respective owners.All rights reserved</p>
    </div>
    </div>
    
    </React.Fragment>
);}
 