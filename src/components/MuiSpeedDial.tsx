import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Stack } from "@mui/material";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="navigation speed dial"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon/>} />}
    >
      <SpeedDialAction icon={<FileCopyOutlinedIcon />} tooltipTitle='copy' />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle='print' />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle='share' />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
