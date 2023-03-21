import React from "react";
import { Flex, Text,GridItem } from "@chakra-ui/react";

interface CustomCardProps {
    title: string;
    children: React.ReactNode;
    hChildren?: string
}

const CustomCard: React.FC<CustomCardProps> = ({ children, title, hChildren="8.5rem" }) => {
  return (
    <GridItem backgroundColor="#FFFFFF" borderRadius={"1rem"}>
      <Flex justifyContent="center" alignItems="center" height="3rem">
        <Text fontWeight={"bold"} color={"black"}>
          {title}
        </Text>
      </Flex>

      <hr color="red" />
      <Flex justifyContent="center" alignItems="center" height={hChildren}>
        {children}
      </Flex>
    </GridItem>
  );
};

export default CustomCard;
