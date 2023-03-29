import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ListItem from "../components/list";
import { getRecentplayers } from "../../../service/api";
import Loader from "../../Loader/Loader";

interface listProps {
  skip:number
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>
}

interface PlayersParams {
  address: string;
  created_at: string;
  avatar: string;
  chance: number;
  tx: string;
  value?: number;
}

const limit = 6

const RecentPlayers: React.FC<listProps> = ({ skip, setHasMore }) => {
  let [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState<PlayersParams[]>([]);

  useEffect(() => {
    const firstPlayers = async () => {
      const totalPlayers = await getRecentplayers(skip*limit,limit);
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
            {players.map((u, index) => (
                <ListItem
                  key={index}
                  index={index}
                  address={u.address}
                  created_at={u.created_at}
                  odds={u.chance}
                  tx={u.tx}
                  prize={u.value}
                />
            ))}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default RecentPlayers;