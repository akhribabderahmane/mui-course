import { Box, Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [rate, setRate] = useState<number | null>(3.5);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newRate: number | null
  ) => {
    setRate(newRate);
    console.log(rate);
  };
  return (
    <Stack spacing={3}>
      <Rating
        value={rate}
        onChange={handleChange}
        precision={0.5}
        size="large"
        color={'#646474'}
        icon={<FavoriteIcon color="error" fontSize="inherit"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
