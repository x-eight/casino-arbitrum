import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ListItem from "../components/list";
import { getRecentplayers } from "../../../service/api";
import Loader from "../../Loader/Loader";

interface listProps {
  skip:number
}

interface PlayersParams {
  address: string;
  created_at: string;
  avatar: string;
  chance: number;
  tx: string;
  value?: number;
}

const RecentPlayers: React.FC<listProps> = ({skip}) => {
  let [loading, setLoading] = useState(true);
  const [segmentNum, setSegmentNum] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const [players, setPlayers] = useState<PlayersParams[]>([]);

  useEffect(() => {
    const firstPlayers = async () => {
      const totalPlayers = await getRecentplayers(0);
      setLoading(false);
      setPlayers(totalPlayers);
    };
    firstPlayers();
  }, []);

  const onSearchPositionFilter = async (seg: number) => {
    if (segmentNum != 0) {
      const totalPlayers = await getRecentplayers(seg);
      if(totalPlayers.length>0){
        setPlayers(players.concat(totalPlayers));
        setSegmentNum((segmentNum) => segmentNum + 6);
      }else{
        setHasMore(false)
      }
    }
  };

  useEffect(() => {
    if (hasMore) {
      onSearchPositionFilter(segmentNum)
    }else{
      console.log('this is tha last');
    }
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