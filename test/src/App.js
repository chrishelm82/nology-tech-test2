import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = () => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=5"
      );
      const data = await response.json();
      console.log(data);
      setPokemons(data.results);
    };
    fetchData();
  };

  return (
    <div className="App">
      <div>
        <h1 className="text">Find your Pokemon</h1>
        <button className="button" onClick={getPokemon}>
          Get Pokemon
        </button>
      </div>
      <ul className="ul">
        {pokemons.map(({ name, url }) => (
          <li className="li" key={url}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
