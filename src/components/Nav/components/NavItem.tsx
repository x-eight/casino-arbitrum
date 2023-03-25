import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import home from "../../../assets/home.svg";
import competition from "../../../assets/competition.svg";
import nitro from "../../../assets/nitro.svg";
import unbinder from "../../../assets/unbinder.png";
import dashboard from "../../../assets/dashboard.png";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface NavItemProps {
  id: number;
  navSize: boolean;
  to: string;
  name: string;
  isSelected: any;
  clickEvent: (color: any) => void;
  isRedirect?: boolean;
  //setRandom: React.Dispatch<React.SetStateAction<number>>;
}

function GetImage(type: string) {
  let image = home;
  if (type === "Dashboard") {
    image = dashboard;
  } else if (type === "Nitro Pool") {
    image = nitro;
  } else if (type === "LP unbinder") {
    image = unbinder;
  } else if (type === "Competition") {
    image = competition;
  }
  return image;
}

const NavItem: React.FC<NavItemProps> = ({
  id,
  to,
  name,
  navSize,
  isSelected,
  clickEvent,
  isRedirect = false,
}) => {
  const [image, setImage] = useState(home);
  useEffect(() => {
    setImage(GetImage(name));
  }, [name]);

  return (
    <Box
      m={"0rem 0.8rem"}
      p="0.5rem"
      title={name}
      id={`box${id}`}
      w={navSize ? "auto" : "13rem"}
      borderRadius={"1rem"}
      _hover={{ background: "#323140", color: "#854b19" }}
      color={isSelected ? "#854b19" : "#ffffff"}
      bg={isSelected ? "#3e3c52" : "#1e1f21"}
      onClick={clickEvent}
    >
      {!isRedirect ? (
        <Link to={to}>
          <Flex align="center">
            <Avatar size="sm" name={name} src={image} />
            <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
              <Text>{name}</Text>
            </Flex>
          </Flex>
        </Link>
      ) : (
        <a
          href={`https://app.camelot.exchange/nitro/0x761Adb257558eBebE97d65AD7aCe5DDd4d06e83d`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Flex align="center">
            <Avatar size="sm" name={name} src={image} />
            <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
              <Text>{name}</Text>
            </Flex>
          </Flex>
        </a>
      )}
    </Box>
  );
};

export default NavItem;
