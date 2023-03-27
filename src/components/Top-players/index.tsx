import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import ColumTitles from "./components/titles";
import PlayersListItem from "./components/players";
import { getTopplayers } from "../../service/api";
import Loader from "../Loader/Loader";

interface PlayersParams {
  address: string;
  amount: number;
}


const TopList = () => {
  let [loading, setLoading] = useState(true);
  const [segmentNum, setSegmentNum] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [players, setPlayers] = useState<PlayersParams[]>([]);

  useEffect(() => {
    const firstPlayers = async () => {
      const totalPlayers = await getTopplayers(0);
      setLoading(false);
      setPlayers(totalPlayers);
    };
    firstPlayers();
  }, []);

  const onSearchPositionFilter = async (seg: number) => {
    if (segmentNum != 0) {
      const totalPlayers = await getTopplayers(seg);
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
        {/*
        <Titles />
        <hr color="#1E1D2D" style={{ width: "100%" }} />
        */}
        {loading ? (
          <Loader />
        ) : (
          <>
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
          </>
        )}
      </Flex>
    </Box>
  );
};

export default TopList;