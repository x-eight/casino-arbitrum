import React from "react";
import RecentPlayers from "../../components/Players/recents";
import TicketPlayers from "../../components/Players/tickets";
import WinnerPlayers from "../../components/Players/winners";

export function SelectPlayers(
  caso: number,
  skip: number,
  setSetSkip: React.Dispatch<React.SetStateAction<number>>,
  hasMore: boolean,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (caso === 2) {
    return (
      <WinnerPlayers
        skip={skip}
        setSetSkip={setSetSkip}
        hasMore={hasMore}
        setHasMore={setHasMore}
      />
    );
  } else if (caso === 3) {
    return <TicketPlayers skip={skip} />;
  } else {
    return <RecentPlayers skip={skip} />;
  }
}
