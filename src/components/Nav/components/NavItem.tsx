import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Flex,
    Text,
    Avatar,
} from '@chakra-ui/react'


interface NavItemProps {
    navSize: boolean;
    to:string,
    name:string
    //setRandom: React.Dispatch<React.SetStateAction<number>>;
  }

const NavItem: React.FC<NavItemProps> = ({to,name,navSize}) => {
    return (
        <Box p={"0.5rem"} w={navSize? "auto":"13rem"} borderRadius={"1rem"} _hover={{ background: "red" }}>
            <Link to={to}>
                <Flex align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
                        <Text>{name}</Text>
                    </Flex>
                </Flex>
            </Link>
        </Box>
    )
}

export default NavItem