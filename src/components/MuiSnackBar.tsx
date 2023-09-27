import * as React from "react";
import { useState, forwardRef } from "react";
import { Snackbar, Button, AlertProps } from "@mui/material";
import { AlertTitle, Alert } from "@mui/material";
const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props}></Alert>;
  }
);
const MuiSnackBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Hi I am a snackbar"
        autoHideDuration={4000}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      /> */}
      <Snackbar
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SnackBarAlert severity="success" onClose={handleClose}>
          Form Submited Successfully
        </SnackBarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackBar;
