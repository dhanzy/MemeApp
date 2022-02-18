import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';


const index = () => {
  return (
    <Box>
        <Navbar />
        <Outlet />
    </Box>
  )
}

export default index;