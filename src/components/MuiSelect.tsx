import React, { useState } from "react";
import { Stack, TextField, MenuItem } from "@mui/material";
const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
      const value=event.target.value;
      setCountry(typeof value ==='string'? value.split(','): value)
  }
  return (
    <Stack direction={"row"} width={"250px"}>
      <TextField
        fullWidth
        label="select country"
        select
        value={country}
        onChange={handleChange}
        SelectProps={{
            multiple:true
        }}
      >
        <MenuItem value={"DZ"}>Algeria</MenuItem>
        <MenuItem value={"FR"}>France</MenuItem>
        <MenuItem value={"US"}>USA</MenuItem>
      </TextField>
    </Stack>
  );
};

export default MuiSelect;
