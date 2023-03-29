import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import PlayersListItem from "./components/players";
import { getTopplayers } from "../../service/api";
import Loader from "../Loader/Loader";

interface listProps {
  skip:number
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>
}

interface PlayersParams {
  address: string;
  amount: number;
}

const limit = 6

const TopList: React.FC<listProps> = ({skip, setHasMore}) => {
  let [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState<PlayersParams[]>([]);

  useEffect(() => {
    const firstPlayers = async () => {
      const totalPlayers = await getTopplayers(skip*limit,limit);
      setHasMore(totalPlayers.hasMore)

      setLoading(false);
      setPlayers(totalPlayers.data);
    };
    firstPlayers();
  }, [skip]);


  return (
    <Box w="100%">
      <Flex flexWrap="wrap">
        {loading ? (
          <Loader />
        ) : (
          <>
            {players.map((p, index) => (
            <PlayersListItem
            key={index}
            index={index}
            address={p.address}
            amount={p.amount}
          />
        ))}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default TopList;