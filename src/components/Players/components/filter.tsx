import { useState, useEffect } from "react";
import { Flex, HStack, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface FilterProps {
  ph: string;
  typePlayers: number;
  setTypePlayers: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
  setSetSkip: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = ({
  ph,
  typePlayers,
  setTypePlayers,
  skip,
  setSetSkip,
  hasMore,
  setHasMore,
}) => {
  return (
    <Flex
      justifyContent="space-between"
      fontFamily="Montserrat"
      background="#1E232F"
      p={`0.9rem ${ph}`}
    >
      <HStack spacing="4">
        <Button
          variant="unstyled"
          color={typePlayers === 1 ? "#EEBA35" : "#ffffff"}
          onClick={() => {
            setTypePlayers(1);
            setSetSkip(0);
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
            setSetSkip(0);
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
            setSetSkip(0);
          }}
          fontSize="0.9rem"
        >
          My Tickets
        </Button>
      </HStack>
      <HStack>
        <Button
          color="#ffffff"
          onClick={() => {
            if (skip > 0) {
              setSetSkip((skip) => skip - 1);
            }
          }}
          fontSize="0.9rem"
          size="xs"
          isDisabled={skip <= 0 ? true : false}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          color="#ffffff"
          onClick={() => {
            setSetSkip((skip) => skip + 1);
          }}
          fontSize="0.9rem"
          size="xs"
          isDisabled={!hasMore}
        >
          <ChevronRightIcon />
        </Button>
      </HStack>
    </Flex>
  );
};

export default Filter;
