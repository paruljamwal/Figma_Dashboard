
import * as React from 'react';
import Box from '@mui/material/Box';
import { Slider } from '@mui/material';



export default function ColorSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        color="secondary"
      />
    </Box>
  );
}



