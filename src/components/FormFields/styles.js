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
    input: {
        font: 'inherit',
     
    }
  }));
  
  export {  useStyle };