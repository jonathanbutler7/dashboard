import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
          horizontal: 'left',
        }}
        open={Boolean(snackbar)}
        autoHideDuration={3000}
        onClose={handleClose}
        message={snackbar}
        action={
          <>
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
