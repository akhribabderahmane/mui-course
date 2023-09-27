import { Stack, Autocomplete, TextField } from "@mui/material";
import { type } from "os";
import React, { useState } from "react";
const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];

type Skill={
    id:number,
    label:string
}
const skillOptions=skills.map((skill,index)=>{
    return{
        id:index+1,
        label:skill,
    }
})
const MuiAutoComplete = () => {

  const [value,setValue]=useState<string|null>(null);
  const [value2,setValue2]=useState<Skill|null>(null);
  const handleChange=(event:any,newValue:string|null)=>{
      setValue(newValue);
      console.log(value)
  }
  const handleChange2=(event:any,newValue:Skill|null)=>{
    setValue2(newValue);
    console.log(value2)
}
  return (
    <Stack spacing={4} width={"300px"} mb={'16em'} mt={'3rem'}>
      <Autocomplete
        options={skills}
        renderInput={(params) => {
          return <TextField {...params} label='skills' />;
        }}
        value={value}
        onChange={handleChange}
        freeSolo
      />
       <Autocomplete
        options={skillOptions}
        renderInput={(params) => {
          return <TextField {...params} label='skills' />;
        }}
        value={value2}
        onChange={handleChange2}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
