import React from 'react';
import { Box } from '@chakra-ui/react';
//import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Nav';
import AllRoutes from './components/Nav/routes';
/*
import Competition from './views/Competition';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import LpUnbinder from './views/lp-unbinder';
import NitroPool from './views/nitro-pool';
*/

function App() {

  return (
    <Box>
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <AllRoutes />
      </Box>
    </Box>
  );
}

export default App;
