import { Flex, HStack, Button } from "@chakra-ui/react";

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
          color="white"
          variant="outline"
          onClick={() => {
            if (skip > 0) {
              setSetSkip((skip) => skip - 1);
            }
          }}
          fontSize="0.9rem"
          size="xs"
          isDisabled={skip <= 0 ? true : false}
        >
          {"<"}
        </Button>
        <Button
          color="white"
          variant="outline"
          onClick={() => {
            setSetSkip((skip) => skip + 1);
          }}
          fontSize="0.9rem"
          size="xs"
          isDisabled={!hasMore}
        >
          {">"}
        </Button>
      </HStack>
    </Flex>
  );
};

export default Filter;
