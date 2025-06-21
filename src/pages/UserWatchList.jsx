import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import WatchList from "../components/WatchList"

export default function UserWatchList() {
  const { watchList, removeFromWatchList } = useContext(UserContext);
  return (
    <WatchList
      movies={watchList}
      removeFromWatchList={removeFromWatchList}
      title="watchList"
    />
  );
}
