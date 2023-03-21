import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NavItem from './components/NavItem';

const Sidebar = () => {
  const [navSize, changeNavSize] = useState(false)

  return (
    <Flex
      backgroundColor={"blue"}
      h={"100vh"}
      w={navSize ? "3.5rem" : "14rem"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        flexDir="column"
        w="100%"
        alignItems={navSize ? "center" : "flex-start"}
      >
        <IconButton
          aria-label='Search database'
          background="blue"
          p={"1rem"}
          _hover={{ background: 'none' }}
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize)
              changeNavSize(false)
            else
              changeNavSize(true)
          }}
        />
        
        <Box alignSelf={"center"} display={navSize ? "none" : "flex"} m={"0.5rem"}>
          <Avatar size="2xl" src="avatar-1.jpg" />
        </Box>

        <Flex alignSelf={"center"} flexDir="column">
          <NavItem id={1} to={"/"} name={"Home"} navSize={navSize} />
          <NavItem id={2} to={"/dashboard"} name={"Dashboard"} navSize={navSize} />
          <NavItem id={3} to={"/nitro-pool"} name={"Nitro Pool"} navSize={navSize} />
          <NavItem id={4} to={"/lp-unbinder"} name={"LP unbinder"} navSize={navSize} />
          <NavItem id={5} to={"/competition"} name={"Competition"} navSize={navSize} />
        </Flex>
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4} display={navSize ? "none" : "flex"}>
            <Heading as="h3" size="sm">Jhon Doe</Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Sidebar