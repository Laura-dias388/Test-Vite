import { useEffect, useState } from "react";

export default function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [name, setName] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [image, setImage] = useState('');

  const fetchPokemons = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, sprites: { front_default } } = await response.json();
    console.log('count');
    
    setName(name);
    setImage(front_default);
    // setTimeout(() => {
    //   setIsFetching(false);
    // }, 1000);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPokemons(pokemonId);
  },[pokemonId]);


  const decrement = () => {
    if (pokemonId > 1) {
      setPokemonId((prevState) => prevState - 1);
    }
  };

  const increment = () => {
    setPokemonId((prevState) => prevState + 1);
  };

  return (
    <section>
      <button onClick={decrement}>Prev</button>
      <button onClick={increment}>Next</button>
      <h2>{ isFetching ? 'Loading...' : name }</h2>
      <img src={ image } alt={ `${name} sprite` } />
    </section>
  )
}
