import React from "react";
import RecentPlayers from "../../components/Players/recents";
import TicketPlayers from "../../components/Players/tickets";
import WinnerPlayers from "../../components/Players/winners";

export function SelectPlayers(
  caso: number,
  skip: number,
  setSetSkip: React.Dispatch<React.SetStateAction<number>>,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>
) {
  console.log("caso",caso,skip)
  if (caso === 2) {
    return (
      <WinnerPlayers
        skip={skip}
        setHasMore={setHasMore}
      />
    );
  } else if (caso === 3) {
    return <TicketPlayers skip={skip} setSetSkip={setSetSkip} setHasMore={setHasMore}/>;
  } else {
    return (
      <RecentPlayers
        skip={skip}
        setHasMore={setHasMore}
      />
    );
  }
}
