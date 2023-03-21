import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Flex,
    Text,
    Avatar,
} from '@chakra-ui/react'


interface NavItemProps {
    id:number
    navSize: boolean;
    to:string,
    name:string
    //setRandom: React.Dispatch<React.SetStateAction<number>>;
  }

const NavItem: React.FC<NavItemProps> = ({id, to, name, navSize}) => {
    const [isColor, setColor] = useState(false)

    return (
        <Box p={"0.5rem"}
            title={name}
            id={`${id}`}
            w={navSize? "auto":"13rem"}
            borderRadius={"1rem"}
            _hover={{ background: "red" }}
            background={isColor ? "yellow":"blue"}
            onClick={() => {
                setColor(true)
            }}
        >
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