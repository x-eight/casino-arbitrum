import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { getRecentwinnings } from "../../../service/api";
import ListItem from "../components/list";
import Loader from "../../Loader/Loader";

interface listProps {
  skip:number
  setSetSkip: React.Dispatch<React.SetStateAction<number>>
  hasMore:boolean
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

const WinnerPlayers: React.FC<listProps> = ({skip,setSetSkip,hasMore,setHasMore}) => {
  let [loading, setLoading] = useState(true);
  const [segmentNum, setSegmentNum] = useState(6);
  
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
        setSegmentNum((segmentNum) => segmentNum + 6);
      }else{
        setHasMore(false)
      }
    }
  };

  useEffect(() => {
    if (hasMore) {
      onSearchPositionFilter(segmentNum)
    }
  }, [skip]);

  return (
    <Box w="100%">
      <Flex flexWrap="wrap">
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
