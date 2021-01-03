import { createMuiTheme } from '@material-ui/core/styles';

import { orange, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: red[500],
    },
  },
});

export { theme };
