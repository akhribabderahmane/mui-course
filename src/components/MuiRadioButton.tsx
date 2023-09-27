import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value)
  const handleOnChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setValue(event.target.value);
      console.log(value)
  }
  return (
    <Box m={"4rem"}>
      <FormControl error>
        <FormLabel id="job-experience-label-group">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-label-group"
          value={value}
          onChange={handleOnChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary" />} label="0-2" value={"0-2"} />
          <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
        </RadioGroup>
        <FormHelperText>Invalid selected!!</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
