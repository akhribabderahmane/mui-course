import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
const MuiCheckBox = () => {
  const [acceptTNC, setAcceptTNC] = useState(false);
  console.log(acceptTNC);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTNC(event.target.checked);
    console.log(acceptTNC);
  };

  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);
  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
    console.log(skills);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTNC} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTNC}
          onChange={handleChange}
        />
      </Box>
      <hr />
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={onHandleChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="Css"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={onHandleChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value={"javascript"}
                  checked={skills.includes("javascript")}
                  onChange={onHandleChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
