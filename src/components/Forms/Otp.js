import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input:{
    width: '63px',
    height: '100px',
    marginTop:'8px ',
    borderRadius: '10px',
    background:'#f2fafd',
    border:'none',
    marginLeft:'25px',
    fontSize:'36px',
    textAlign:'center',
    color:'#637696'
  },
  text:{
      
      margin:'20px auto',
      marginLeft: '123px' },
  label:{
      fontSize:'16px',
      color:'#637696',
      textAlign:'start',
          marginLeft:'28px',

  }
 
}));
const OTPPAGE = () => {
    const classes=useStyles()
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

       
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
           

            <div className="row">

                <div className={classes.text}>
                <label className={classes.label}>4 digit code</label><br></br>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className={classes.input}
                                type="text"
                                name={otp.name}
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                   
                </div>
            </div>
        </>
    );
};

export default OTPPAGE;