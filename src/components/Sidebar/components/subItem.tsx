import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Avatar, Button, VStack } from "@chakra-ui/react";
import NavItem from "./NavItem";

interface GroupItemsProps {
  id: number;
  navSize: boolean;
  name: string;
  image?: string;
  selectedButton: number | null;
  isSelected: boolean;
  redirect?: string;
  subIndices: any[];
  setSelectedButton: React.Dispatch<React.SetStateAction<number | null>>;
}

const GroupItems: React.FC<GroupItemsProps> = ({
id,
  name,
  image,
  navSize,
  selectedButton,
  isSelected,
  subIndices,
  setSelectedButton
}) => {
const [menuId, setMenuId] = useState(id);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleToggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleButtonClick = (color: number) => {
    setMenuId(color)
    setSelectedButton(color);
  };

  return (
    <Box
      title={name}
    >
      <Flex onClick={handleToggleSubmenu} 
      align="center" 
      cursor="pointer"
      m={"0rem 0.8rem"}
      p="0.5rem"
      w={navSize ? "auto" : "11rem"}
      title={name}
      _hover={{ color: "#EEBA35" }}
      color={isSelected || (selectedButton ===menuId )? "#EEBA35" : "#ffffff"}
      fontSize="0.9rem"
      >
        <Avatar size="sm" src={image} />
        <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
          <Text>Games</Text>
        </Flex>
      </Flex>
      {(showSubmenu) && (
        <Flex alignSelf="end" flexDir="column">
          {subIndices.map((n, i) => (
            <NavItem
              id={n.id}
              to={n.to}
              name={n.name}
              image={n.image}
              navSize={navSize}
              isSelected={selectedButton === n.id}
              clickEvent={() => handleButtonClick(n.id)}
              width="9rem"
            />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default GroupItems;
