import React from "react";
import { Flex, Text, GridItem } from "@chakra-ui/react";

interface CustomCardProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  hChildren?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  title,
  hChildren = "8.5rem",
}) => {
  return (
    <GridItem
      backgroundColor="transparent"
      borderRadius={"1rem"}
      style={{
        backgroundColor: "rgba(0,0,0,.7)",
        width: "100%",
        height: "auto",
        content: "none",
      }}
    >
      <Flex justifyContent="center" alignItems="center" height="3rem">
        <Text fontFamily="Haas Grot Text R Web" fontWeight={"bold"} color={"#ffffff"}>
          {title}
        </Text>
      </Flex>

      <hr color="#EEBA35" />
      <Flex justifyContent="center" alignItems="center" height={hChildren}>
        {children}
      </Flex>
    </GridItem>
  );
};

export default CustomCard;
