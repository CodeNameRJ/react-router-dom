import './App.css'
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonForm from './components/PokemonForm/PokemonForm';
import NavBar from './components/NavBar/NavBar';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1
    setPokemon([...pokemon, newPokemonData])


  }



  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h2> This is My Home Page</h2>}></Route>
        <Route path='/pokemon' element={<PokemonList pokemon={pokemon}/>}></Route>
        <Route path='/pokemon/:pokemonId' element={<PokemonDetails pokemon={pokemon}/>}></Route>
        <Route path='pokemon/new' element={<PokemonForm addPokemon={addPokemon}/>}></Route>
        <Route path='*' element={<h2>Whoops, nothing there</h2>}></Route>



      </Routes>



    </>
  );
};

export default App;



/* <Route path='/pokemon/:pokemonId' element={<PokemonDetails pokemon={pokemon}/>}></Route> */
// route params defined in our paths---> '/pokemon/:pokemonId
// pokemon from state so we can pass it in as a prop from our pokemon details component



// path='*' catch all statment







// // src/App.jsx

// const App = () => {
//   return <h1>Hello world!</h1>;
// };

// export default App;





//      MAIN POINT OF LESSON - REACT ROUTER DOM - WE DONT HAVE TO WORRY ABOUT RENDERING OURSELVES, REACT ROUTER DOM DOES IT FOR US, USEING A FORM WE ARE USED TO USING ROUTES AND LINKING ROUTES TO SPECIFIC COMPONENTS - USERS DONT KNOW THIS IS A SINGLE PAGE APP
