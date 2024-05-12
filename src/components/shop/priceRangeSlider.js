import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function PriceRangeSlider() {
  const [value, setValue] = useState([0, 100]); // Initial range values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "90%" , margin : "0 auto" }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={1000} // Set your maximum price here
      />
      <p className='text-xs'>
        از {value[0]} تا {value[1]} <span>تومان</span>
      </p>
    </div>
  );
}

export default PriceRangeSlider;
