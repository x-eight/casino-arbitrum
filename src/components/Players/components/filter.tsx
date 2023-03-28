import { useState, useEffect } from "react";
import { Flex, HStack, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface FilterProps {
    ph:string
    typePlayers:number
    setTypePlayers: React.Dispatch<React.SetStateAction<number>>
}

const Filter: React.FC<FilterProps> = ({ph,typePlayers,setTypePlayers}) => {



  return (
    <Flex justifyContent="space-between" fontFamily="Montserrat" background="#1E232F" p={`0.9rem ${ph}`}>
          <HStack spacing="4">
            <Button
              variant="unstyled"
              color={typePlayers === 1 ? "#EEBA35" : "#ffffff"}
              onClick={() => {
                setTypePlayers(1);
              }}
              fontSize="0.9rem"
            >
              Recents
            </Button>
            <Button
              variant="unstyled"
              color={typePlayers === 2 ? "#EEBA35" : "#ffffff"}
              onClick={() => {
                setTypePlayers(2);
              }}
              fontSize="0.9rem"
            >
              Winners
            </Button>
            <Button
              variant="unstyled"
              color={typePlayers === 3 ? "#EEBA35" : "#ffffff"}
              onClick={() => {
                setTypePlayers(3);
              }}
              fontSize="0.9rem"
            >
              My Tickets
            </Button>
          </HStack>
          <HStack>
            <Button
              color={typePlayers === 2 ? "#EEBA35" : "#ffffff"}
              onClick={() => {
                setTypePlayers(2);
              }}
              fontSize="0.9rem"
              size="xs"
            >
                <ChevronLeftIcon />
            </Button>
            <Button
              color={typePlayers === 3 ? "#EEBA35" : "#ffffff"}
              onClick={() => {
                setTypePlayers(3);
              }}
              fontSize="0.9rem"
              size="xs"
            >
                <ChevronRightIcon />
            </Button>
          </HStack>
        </Flex>
  );
};

export default Filter;