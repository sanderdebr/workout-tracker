import React, { useState } from 'react';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Snackbar from '@material-ui/core/Snackbar';

function PasswordForget(props) {

  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({email: '', error: null})

  const handleChange = e => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = () => {
    props.firebase
      .doPasswordReset(state.email)
      .then(() => {
        setState({email: '', error: null });
        handleClose();
        setOpenAlert(true);
      })
      .catch(error => {
        setState({ error });
      });
  };

  const isInvalid = state.email === '';

  return (
      <div>
        <Link to="" onClick={handleClickOpen}>
          Forgot password?
        </Link>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Reset my password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To reset your password, please enter your email address here. We will you instructions on how to reset your password shortly after.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              fullWidth
            />
              {state.error && <p style={{color:'red'}}>{state.error.message}</p>}
          
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isInvalid} type="submit" color="primary">
              Reset password
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={openAlert} 
          autoHideDuration={6000} 
          message="Password reset link succesfully sent"
        />

      </div>
    )
}

export default withFirebase(PasswordForget);