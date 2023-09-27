import React from "react";
import { Button, Stack } from "@mui/material";

const MuiButton = () => {
  return (
    <div className=" space-y-5 my-8">
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">Text</Button>
        <Button variant="contained" href="https://google.com">
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button color="primary" variant="contained">
          primary
        </Button>
        <Button color="secondary" variant="contained">
          secondary
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="warning" variant="contained">
          warning
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="info" variant="contained">
          Gray
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
      <Button color="primary" variant="outlined">
          primary
        </Button>
        <Button color="secondary" variant="outlined">
          secondary
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="warning" variant="outlined">
          warning
        </Button>
        <Button color="error" variant="outlined">
          Error
        </Button>
        <Button color="info" variant="outlined">
          Gray
        </Button>
      </Stack>
      <Stack display={'block'} spacing={2} direction={'row'}> 
         <Button variant="contained" size="small">small</Button>
         <Button variant="contained" size="medium">medium</Button>
         <Button variant="contained" size="large">large</Button>
      </Stack>
    </div>
  );
};

export default MuiButton;
