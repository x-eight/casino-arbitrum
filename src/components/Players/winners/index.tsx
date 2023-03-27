import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { getRecentwinnings } from "../../../service/api";
import Titles from "../components/titles";
import ListItem from "../components/list";
import Loader from "../../Loader/Loader";

interface PlayersParams {
  address: string;
  created_at: string;
  avatar: string;
  chance: number;
  tx: string;
  value?: number;
}

const WinnerPlayers: React.FC = () => {
  let [loading, setLoading] = useState(true);
  const [segmentNum, setSegmentNum] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [winners, setWinners] = useState<PlayersParams[]>([])
  useEffect(() => {
    const firstPlayers = async () => {
      const totalWinners = await getRecentwinnings(0);
      setLoading(false);
      setWinners(totalWinners);

    };
    firstPlayers();
  }, [])

  const onSearchPositionFilter = async (seg: number) => {
    if (segmentNum != 0) {
      const totalPlayers = await getRecentwinnings(seg);
      if(totalPlayers.length>0){
        setWinners(winners.concat(totalPlayers));
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
            {winners.map((u, index) => (
       
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

export default WinnerPlayers;
