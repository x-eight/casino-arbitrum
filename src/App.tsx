import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
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
    <Flex flexDir={"row"}>
      <Sidebar />
      <Box w={"100%"} backgroundColor={"#F5F5F5"} >
        <AllRoutes />
      </Box>
    </Flex>
  );
}

export default App;
