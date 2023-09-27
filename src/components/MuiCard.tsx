import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <Box width={"400px"} marginTop={8}>
      <Card sx={{backgroundColor:'rgb(15 23 42 / 1)'}} className="pb-2 bg-slate-900 brightness-125 slide-top">
        <CardMedia
          className="p-2 rounded-xl"
          component={"img"}
          height={"140"}
          image="http://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography sx={{color:'white'}} gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography sx={{color:'rgb(203 213 225 / 1)'}} className="opacity-80" gutterBottom variant="body2">
            React (also known as React. js or ReactJS) is a free and open-source
            front-end JavaScript library for building user interfaces based on
            components. It is maintained by Meta (formerly Facebook) and a
            community of individual developers and companies.
          </Typography>
        </CardContent>
        <CardActions className="justify-end">
          <Button variant="contained" size="small" color="secondary">
            Explore
          </Button>
          <Button variant="contained" size="small" color="secondary">
            share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
