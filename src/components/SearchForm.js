import { useState } from "react";


const SearchForm = ({ setPlayersResults }) => {
  const [playerName, setPlayerName] = useState("");
  //Estado para guardar el nombre del player introducido en el input

  const fetchPlayerData = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(
        `https://xivapi.com/character/search?name=${playerName}`
      );
        //llamada a la api pasando el nombre del input. Preventdefault evitar que recargue el form
      const body = await res.json();

      if (res.ok) {
        setPlayersResults(body.Results);
        setPlayerName("");
        console.log(body.Results) //prueba para ver qué se manda
        //si todo va bien pasamos los resultados al estado PlyaerResults y vaciamos form
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    //formulario de búsqueda
    <form onSubmit={fetchPlayerData}>
      <label htmlFor="name">Character name:</label>
      <input
        type="search"
        id="name"
        name="name"
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
          //vinculamos con two ways el input al array de playerName (estado)
        }}
      />

      <button>Search</button>
    </form>
  );
};

export default SearchForm;
