import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,  
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

const MuiDialog = () => {
  const [open,setOpen]=useState(false)
  const handleClick=()=>{
    setOpen(true);
  }
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>Open Dialog</Button>
      <Dialog onClose={()=>setOpen(false)} open={open} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>
                Are you sure you want to submit the test , you will not be able to do it after
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=> setOpen(false)}>Submit</Button>
            <Button onClick={()=> setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MuiDialog;
