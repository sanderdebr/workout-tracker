import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nanum Gothic',
  },
  palette: {
      primary: {
        main: '#313131'
      },
      secondary: {
        main: '#8ec5fc',
        // main: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
      }
  },
});

export default theme;