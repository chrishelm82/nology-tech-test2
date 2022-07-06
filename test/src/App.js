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
      <ol className="ol">
        {pokemons.map(({ name, key }) => (
          <li className="li" key={key}>
            {name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
