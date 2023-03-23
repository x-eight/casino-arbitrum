import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Ttops } from "./Test-players/tops";
import ColumTitles from "./components/titles";
import PlayersListItem from "./components/players";

interface PlayersParams {
  address: string;
  avatar: string;
  value: string;
}


const TopList = () => {
  const [players, setPlayers] = useState<PlayersParams[]>([])
  useEffect(() => {
    setPlayers(Ttops)
  }, [])

  return (
    <Box w="100%" /*h="55rem" overflowY="scroll"*/>
      <Flex flexWrap="wrap">
        <ColumTitles />
        <hr color="#1E1D2D" style={{ width: "100%" }} />
        {players.map((u, index) => (
          <>
            <PlayersListItem
            key={index}
            address={u.address}
            avatar={u.avatar}
            value={u.value}
          />
          <hr color="#1E1D2D" style={{ margin:"auto auto", width: "95%" }} />
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default TopList;
