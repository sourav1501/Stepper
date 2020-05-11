import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footerbottom from './footerbottom'
const useStyles = makeStyles((theme) => ({
    wrapper:{
       position:'relative',
            width:'100%',
            
            height: '500px',
            zIndex: '1',
            marginTop:'140px',
            backgroundImage: 'linear-gradient(to right, #f5fcff, #ffffff)',
    },
    inner:{
      
        "&:before":{
            content: "','",
            position: 'absolute',
            left: '0',
            bottom: '0',
            right:'0px',
            overflow: 'visible',
            width: '100%',
            backgroundImage: 'linear-gradient(to right, #f5fcff, #ffffff)',
            top: '-53px',
            
          
            zIndex: '-1',
          
            transform: 'skewY(5deg )',
            backfaceVisibility: 'initial',
            width:'100%',
          
       
    },
 
    },
    container:{
        width:'70%',
        margin:'0 auto',
        display:'flex',
       padding:'60px 0',
       
        justifyContent:'space-between',
    },
  xcoins:{
      width:'50%',
      '& p':{
        color:'#637696',
        fontSize: '14px',


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
    textDecoration:'none',
    fontSize:'34px',
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
    <div className={classes.wrapper}>
       
        <div className={classes.inner}>
        <div className={classes.container}>
            <div className={classes.xcoins}>
                <div className={classes.branding}>
                    <a href="#">xcoins</a>
                </div>
                <div>

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
    </div>
</React.Fragment>
);}
 
 