import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
      <Box backgroundColor={"red"}>
        <Link to="/">
            Home
        </Link>
        <Link to="/dashboard">
            Dashboard
        </Link>
        <Link to="/nitro-pool">
          nitro-pool
        </Link>
        <Link to="/lp-unbinder">
            lp-unbinder
        </Link>
        <Link to="/competition">
          competition
        </Link>
      </Box>
      </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
  
  export default Sidebar