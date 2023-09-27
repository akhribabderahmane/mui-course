import { Stack, TextField } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers';

const MuiDateTime = () => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date-picker"
        value={date}
        onChange={(newValue)=> {setDate(newValue); console.log(date)}
        }
      />
    </Stack>
  );
};

export default MuiDateTime;
