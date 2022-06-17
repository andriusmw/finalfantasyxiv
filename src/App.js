import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import List from "./components/List";
import PlayerCard from "./components/PlayerCard";
import Footer from "./components/Footer";
import PlayerDetails from "./components/PlayerDetails";

function App() {
  const [playersResults, setPlayersResults] = useState([]);
  const [playerDetails, setPlayerDetails] = useState({});
  const [GearSet, setGearSet] = useState({}); // creo estado para GearSet

  return (
    <>
      <Header />
      <main>
        <SearchForm setPlayersResults={setPlayersResults} />
        

        {playersResults.length > 0 && (
          <List
            data={playersResults}
            render={(player) => {
              const { ID, Avatar: avatar, Name: name, Server: server } = player;

              return (
                <li key={ID}>
                  <PlayerCard
                    id={ID}
                    name={name}
                    avatar={avatar}
                    server={server}
                    setPlayerDetails={setPlayerDetails}
                    setPlayersResults={setPlayersResults}
                    setGearSet={setGearSet} //paso el setGearSet a playercard
                  />
                </li>
              );
            }}
          />
        )}

        {Object.keys(playerDetails).length > 0 && (
          <PlayerDetails data={playerDetails} />
          
         
        )};
         {Object.keys(GearSet).length > 0 && (
          <GearSet data={GearSet} ></GearSet>
         
        )}

      </main>
      <Footer />
    </>
  );
}

export default App;
