import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footerbottom from './footerbottom'
import logo from '../../assets/logo-element-01.png'
import trust from '../../assets/trustpilot-03.png'
import slant from '../../assets/pattern-01.svg'
const useStyles = makeStyles((theme) => ({
    wrapper:{
      
            backgroundImage: 'linear-gradient(to right, #f5fcff, #ffffff)',
    },
  pattern:{
width:'100%',
margin:'0',
padding:'0',
'& img':{
    width:'100%'
}
  },
 
    
    container:{
        width:'70%',
        margin:'-10px auto',
        display:'flex',
       
        justifyContent:'space-between',
    },
  xcoins:{
      width:'50%',
      '& p':{
        color:'#637696',
        fontSize: '14px',


      }
  },
  reviews:{
    marginTop:'18px',
    width:'256px',
    '& img':{
        width:'100%'
    }
  },
  footernav:{
      width:'50%',
      display:'flex',
      justifyContent:'space-between',
   
      '& p':{
          margin:'0'
      }
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
  ulfooter:{
      listStyle:'none',
      margin:'0',
      padding:'0',
      "& li":{
          margin:'15px 0',
      },
      '& a':{
          textDecoration:'none',
          width: '66px',
          height: '102px',
         
          fontSize: '16px',
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: '2.13',
          letterSpacing: 'normal',
          color:'#637696'
      },
      '& span':{
          marginRight:'10px'
      }
  }

 
 
}));

export default function Header(){
    const classes = useStyles();
return (
    <React.Fragment>
        <div className={classes.pattern}>
            <img src={slant} alt="aja"/>
        </div>
    <div className={classes.wrapper}>
       
        
        <div className={classes.container}>
            <div className={classes.xcoins}>
                <div className={classes.branding}>
                    <a href="#"><img src={logo} alt="aa"/>&nbsp;xcoins</a>
                </div>
                <div className={classes.reviews}>
                   <img src={trust} alt='aha'/>
                </div>
                <p>14 East,Level 8,Sliema Road,GZR1639,Malta</p>
            </div>

            <div className={classes.footernav}>
                <div className={classes.company}>
                    <p>Company</p>
                    <ul className={classes.ulfooter}>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Carrers</a>
                        </li>
                        <li>
                            <a href="#">Press kit</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.support}>
                <p>Support</p>
                       <ul className={classes.ulfooter}>
                       <li>
                            <a href="#">Help Center</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                       </ul>
                    </div>
                    <div className={classes.social}>
                    <p>Social</p>
                    <ul className={classes.ulfooter}>
                       <li>
                            <a href="#"><span ><i class="fab fa-instagram"></i></span>Blog</a>
                        </li>
                        <li>
                            <a href="#"><span> <i class="fab fa-twitter"></i></span>Twitter</a>
                        </li>
                        <li>
                            <a href="#"><span>   <i class="fab fa-facebook-square"></i></span>Facebook</a>
                        </li>
                       </ul>
                    </div>
            </div>
         
        </div>
        <Footerbottom/>
    
    
    </div>
</React.Fragment>
);}
 
 