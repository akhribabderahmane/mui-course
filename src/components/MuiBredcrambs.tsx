import { Box, Link, Typography, Breadcrumbs } from "@mui/material";
import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const MuiBredcrambs = () => {
  return (
    <Box m={7}>
      <Breadcrumbs sx={{marginBottom:4}} aria-label="breadcrumb" separator='-'>
        <Link href="#">Home</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Accessoires</Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs  sx={{marginBottom:4}}  aria-label="breadcrumb" separator='-'>
        <Link href="#">Home</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Accessoires</Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs sx={{marginBottom:4}} aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Link underline="hover" href="#">Home</Link>
        <Link underline="hover"href="#">Catalogue</Link>
        <Link underline="hover" href="#">Accessoires</Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs maxItems={2} sx={{marginBottom:4}} aria-label="breadcrumb" separator={<NavigateNextIcon />}>
        <Link underline="hover" href="#">Home</Link>
        <Link underline="hover"href="#">Catalogue</Link>
        <Link underline="hover" href="#">Accessoires</Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBredcrambs;
