import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

import { useDashboard } from '../context';

export default function SimpleSnackbar() {
  const { setSnackbar, snackbar } = useDashboard();

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={Boolean(snackbar)}
        autoHideDuration={300000}
        onClose={handleClose}
        message={snackbar}
        bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
        action={
          <>
            <MuiAlert onClose={handleClose} severity='success'>
              {snackbar}
            </MuiAlert>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
