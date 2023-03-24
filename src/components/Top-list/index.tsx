import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import ColumTitles from "./components/titles";
import PlayersListItem from "./components/players";
import { getTopplayers } from "../../service/api";

interface PlayersParams {
  address: string;
  amount: number;
}


const TopList = () => {
  const [players, setPlayers] = useState<PlayersParams[]>([]);

  useEffect(() => {
    const firstPlayers = async () => {
      const totalPlayers = await getTopplayers(0);
      setPlayers(totalPlayers);
    };
    firstPlayers();
  }, []);

  return (
    <Box w="100%">
      <Flex flexWrap="wrap">
        <ColumTitles />
        <hr color="#1E1D2D" style={{ width: "100%" }} />
        {players.map((p, index) => (
          <>
            <PlayersListItem
            key={index}
            index={index}
            address={p.address}
            amount={p.amount}
          />
          <hr color="#1E1D2D" style={{ margin:"auto auto", width: "95%" }} />
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default TopList;
