import {
    createMuiTheme,
    responsiveFontSizes,
    makeStyles
  } from '@material-ui/core/styles';
  import { cyan } from '@material-ui/core/colors';
  
  let theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: cyan,
      secondary: cyan
    }
  });
  
  theme = responsiveFontSizes(theme);
  
  const useStyle = makeStyles(() => ({
    paper: {
    width:'32%',
    margin:'0px auto',
    background:'#fff'
    },
    root: {
      width:'100%',
      background:'#fff'
      },
   
  }));
  
  export { theme, useStyle };