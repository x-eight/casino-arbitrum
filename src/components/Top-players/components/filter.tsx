import { useState, useEffect } from "react";
import { Flex, HStack, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface FilterProps {
  ph?: string;
  skip: number;
  setSetSkip: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
}

const Filter: React.FC<FilterProps> = ({
  ph="2.5rem",
  skip,
  setSetSkip,
  hasMore,
}) => {
  return (
    <Flex
      justifyContent="flex-end"
      fontFamily="Montserrat"
      background="#1E232F"
      p={`0.9rem ${ph}`}
    >
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
