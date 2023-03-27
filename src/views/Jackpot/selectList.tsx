import RecentPlayers from "../../components/Players/recents"
import TicketPlayers from "../../components/Players/tickets"
import WinnerPlayers from "../../components/Players/winners"

export function SelectPlayers(caso:number) {
    if (caso === 2) {
      return <WinnerPlayers />
    } else if (caso === 3) {
      return <TicketPlayers />
    } else {
      return <RecentPlayers />
    }
  }