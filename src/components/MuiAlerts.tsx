import React from "react";
import { Button, Stack } from "@mui/material";
import { AlertTitle, Alert } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check'

const MuiAlerts = () => {
  return (
    <Stack spacing={6}>
      <Stack spacing={2}>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
        <Alert severity="info">This is a info alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="error">This is a error alert — check it out!</Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert variant="outlined" severity="success">
          This is a success alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="info">
          This is a info alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="error">
          This is a error alert — check it out!
        </Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
        <Alert variant="filled" severity="info">
          This is a info alert — check it out!
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="filled" severity="error">
          This is a error alert — check it out!
        </Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert severity="success" icon={<CheckIcon fontSize="inherit" />} action={<Button color="success">Undo</Button>}>
          <AlertTitle>success</AlertTitle>
          This is a success alert — check it out!
        </Alert>
        <Alert severity="info">
          <AlertTitle>information</AlertTitle>
          This is a info alert — check it out!
        </Alert>
        <Alert severity="warning">
          <AlertTitle>warning</AlertTitle>
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="error" onClose={()=> alert('error closed')}>
          <AlertTitle>error</AlertTitle>
          This is a error alert — check it out!
        </Alert>
      </Stack>
    </Stack>
  );
};

export default MuiAlerts;
