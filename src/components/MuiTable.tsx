import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
const data = [
  {
    id: 1,
    first_name: "Gar",
    last_name: "Breznovic",
    email: "gbreznovic0@fastcompany.com",
    gender: "Male",
    ip_address: "135.240.182.181",
  },
  {
    id: 2,
    first_name: "Timmy",
    last_name: "Halwood",
    email: "thalwood1@wufoo.com",
    gender: "Female",
    ip_address: "41.129.200.125",
  },
  {
    id: 3,
    first_name: "Stacy",
    last_name: "Lear",
    email: "slear2@joomla.org",
    gender: "Female",
    ip_address: "219.104.129.14",
  },
  {
    id: 4,
    first_name: "Russ",
    last_name: "Semonin",
    email: "rsemonin3@chronoengine.com",
    gender: "Male",
    ip_address: "15.88.104.190",
  },
  {
    id: 5,
    first_name: "Enid",
    last_name: "Cotgrove",
    email: "ecotgrove4@mac.com",
    gender: "Female",
    ip_address: "232.19.66.164",
  },
  {
    id: 6,
    first_name: "Chrissie",
    last_name: "Stithe",
    email: "cstithe5@whitehouse.gov",
    gender: "Female",
    ip_address: "204.66.190.184",
  },
  {
    id: 7,
    first_name: "Allianora",
    last_name: "Bohlsen",
    email: "abohlsen6@creativecommons.org",
    gender: "Female",
    ip_address: "196.193.66.254",
  },
  {
    id: 8,
    first_name: "Reggy",
    last_name: "Linklet",
    email: "rlinklet7@illinois.edu",
    gender: "Male",
    ip_address: "22.164.32.233",
  },
  {
    id: 9,
    first_name: "Muffin",
    last_name: "Dowell",
    email: "mdowell8@auda.org.au",
    gender: "Male",
    ip_address: "45.9.45.10",
  },
  {
    id: 10,
    first_name: "Abraham",
    last_name: "Hutt",
    email: "ahutt9@nih.gov",
    gender: "Genderfluid",
    ip_address: "185.93.230.212",
  },
];
const MuiTable = () => {
  return (
    <TableContainer sx={{marginX:'16px',width:'80%'}} component={Paper}>
      <Table aria-aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user. first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
