import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Titles from "../components/titles";
import ListItem from "../components/list";
import { getRecentplayers } from "../../../service/api";
import Loader from "../../Loader/Loader";

interface PlayersParams {
  address: string;
  created_at: string;
  avatar: string;
  chance: number;
  tx: string;
  value?: number;
}

const RecentPlayers: React.FC = () => {
  let [loading, setLoading] = useState(true);
  const [segmentNum, setSegmentNum] = useState(20);
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
        setSegmentNum((segmentNum) => segmentNum + 20);
      }else{
        setHasMore(false)
      }
    }
  };

  const onScroll = (event: any) => {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (hasMore) {
        onSearchPositionFilter(segmentNum)
      }else{
        console.log('this is tha last');
      }
    }
  };


  return (
    <Box w="100%" overflowY="auto" onScroll={onScroll}>
      
      <Flex flexWrap="wrap">
        <Titles />
        <hr color="#1E1D2D" style={{ width: "100%" }} />
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