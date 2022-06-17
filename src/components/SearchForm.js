import { useState } from "react";

const SearchForm = ({ setPlayersResults }) => {
  const [playerName, setPlayerName] = useState("");

  const fetchPlayerData = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(
        `https://xivapi.com/character/search?name=${playerName}`
      );

      const body = await res.json();

      if (res.ok) {
        setPlayersResults(body.Results);
        setPlayerName("");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={fetchPlayerData}>
      <label htmlFor="name">Character name:</label>
      <input
        type="search"
        id="name"
        name="name"
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      />

      <button>Search</button>
    </form>
  );
};

export default SearchForm;
