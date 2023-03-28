import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { getMyTickets } from "../../../service/api";
import ListItem from "../components/list";
import Loader from "../../Loader/Loader";
import useCasinuFinance from "../../../hooks/useCasinuFinance";

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

const TicketPlayers: React.FC<listProps> = ({skip}) => {

  const { account } = useCasinuFinance();

  let [loading, setLoading] = useState(true);
  const [segmentNum, setSegmentNum] = useState(15);
  const [hasMore, setHasMore] = useState(true);
  const [winners, setWinners] = useState<PlayersParams[]>([])
  useEffect(() => {
    const firstPlayers = async () => {
      const totalWinners = await getMyTickets(account,0);
      setLoading(false);
      setWinners(totalWinners);

    };
    firstPlayers();
  }, [])

  useEffect(() => {
    const firstPlayers = async () => {
      const totalWinners = await getMyTickets(account,0);
      setSegmentNum(15)
      setLoading(false);
      setWinners(totalWinners);

    };
    firstPlayers();
  }, [account])

  const onSearchPositionFilter = async (seg: number) => {
    if (segmentNum != 0) {
      const totalPlayers = await getMyTickets(account,seg);
      if(totalPlayers.length>0){
        setWinners(winners.concat(totalPlayers));
        setSegmentNum((segmentNum) => segmentNum + 15);
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

export default TicketPlayers;
