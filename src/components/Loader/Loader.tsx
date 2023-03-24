import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import "./Loader.style.css"

const Loader = () => {
  return (
    <Box w="100%">
      <Box className="loader"></Box>
    </Box>
  );
};

export default Loader;