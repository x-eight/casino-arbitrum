import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
//import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Nav';
import AllRoutes from './components/Nav/routes';
import CustomButtom from './components/Button-connect';

function App() {

  return (
    <Flex flexDir="row">
      <Sidebar />
      <Flex w={"100%"}  flexDir="column" backgroundColor={"#142343"} >
      <CustomButtom />
      <Box>
        <AllRoutes />
      </Box>
      </Flex>
    </Flex>
  );
}

export default App;
