import { useParams } from "react-router";

const PokemonDetails = (props) => {
    // Always verify that any props are being passed correctly!
    console.log(props);

    const {pokemonId} = useParams()
    console.log(pokemonId)

    // const params = useParams(); // allows us to use params from our routes // above is destructuring
    // console.log(params);

    const singlePokemon = props.pokemon.find((poke) => {
        return poke._id === Number(pokemonId)


    })

    console.log(singlePokemon)

    return (
      <>
        <h2>{singlePokemon.name}</h2>
        <dl>
          <dt>Weight:</dt>
          <dd>{singlePokemon.weight}</dd>
          <dt>Height:</dt>
          <dd>{singlePokemon.height}</dd>
        </dl>
      </>
    );
  };

  export default PokemonDetails;
