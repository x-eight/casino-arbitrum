import React, { useEffect,useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { getMyTickets } from "../../../service/api";
import ListItem from "../components/list";
import Loader from "../../Loader/Loader";
import useCasinuFinance from "../../../hooks/useCasinuFinance";

interface listProps {
  skip:number
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>
  setSetSkip: React.Dispatch<React.SetStateAction<number>>,
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

const TicketPlayers: React.FC<listProps> = ({ skip, setHasMore, setSetSkip }) => {

  const { account } = useCasinuFinance();

  let [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState<PlayersParams[]>([]);

  useEffect(() => {
    const firstPlayers = async () => {
      const totalPlayers = await getMyTickets(account, skip*limit,limit);
      setHasMore(totalPlayers.hasMore)

      setLoading(false);
      setPlayers(totalPlayers.data);
    };
    firstPlayers();
  }, [skip]);

  useEffect(() => {
    const firstPlayers = async () => {
      const totalPlayers = await getMyTickets(account, 0,limit);
      setSetSkip(0)
      setHasMore(totalPlayers.hasMore)

      setLoading(false);
      setPlayers(totalPlayers.data);

    };
    firstPlayers();
  }, [account])

  /*
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
  */

  return (
    <Box w="100%" /*overflowY="auto" onScroll={onScroll}*/>
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

export default TicketPlayers;
