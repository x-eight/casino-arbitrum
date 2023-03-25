import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { getRecentwinnings } from "../../service/api";
import ColumTitles from "../Players-list/components/titles";
import PlayersListItem from "../Players-list/components/players";

interface PlayersParams {
  address: string;
  created_at: string;
  avatar: string;
  chance: number;
  tx: string;
  value?: number;
}


const WinnerList: React.FC = () => {
  const [winners, setWinners] = useState<PlayersParams[]>([])
  useEffect(() => {
    const firstPlayers = async () => {
      const totalWinners = await getRecentwinnings(0);
      setWinners(totalWinners);

    };
    firstPlayers();
  }, [])


  return (
    <Box h="20.5rem" w="100%" overflowY="scroll">
      <Flex flexWrap="wrap">
        <ColumTitles />
        <hr color="#1E1D2D" style={{ width: "100%" }} />
        {winners.map((u, index) => (
          <>
            <PlayersListItem
            index={index}
            key={index}
            address={u.address}
            created_at={u.created_at}
            avatar={u.avatar}
            odds={u.chance}
            tx={u.tx}
            value={u.value}
          />
          <hr color="#1E1D2D" style={{ margin:"auto auto", width: "95%" }} />
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default WinnerList;
