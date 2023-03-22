import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Tplayers } from "./Test-players/players";
import { Twinners } from "./Test-players/winners";
import ColumTitles from "./components/titles";
import PlayersListItem from "./components/players";

interface CustomListProps {
  type: number;
}

interface PlayersParams {
  address: string;
  created_at: number;
  avatar: string;
  Odds: number;
  tx: string;
  value?: string;
}


const CustomList: React.FC<CustomListProps> = ({
  type
}) => {
  const [players, setPlayers] = useState<PlayersParams[]>([])
  const [winners, setWinners] = useState<PlayersParams[]>([])
  useEffect(() => {
    setPlayers(Tplayers)
    setWinners(Twinners)
  }, [])

  let test = new Array<PlayersParams>()
  if (type===1) {
    test = players
  }else {
    test = winners
  }
  return (
    <Box h="20.5rem" w="100%" overflowY="scroll">
      <Flex flexWrap="wrap">
        <ColumTitles />
        <hr color="blue" style={{ width: "100%" }} />
        {test.map((u, index) => (
          <>
            <PlayersListItem
            key={index}
            address={u.address}
            created_at={u.created_at}
            avatar={u.avatar}
            odds={u.Odds}
            tx={u.tx}
            value={u.value}
          />
          <hr color="blue" style={{ margin:"auto auto", width: "95%" }} />
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default CustomList;
