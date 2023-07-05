import { useEffect, useLayoutEffect, useState } from "react";
import colorsData from "../data/colors"
import { useSelector,useDispatch } from "react-redux";
import {changePoke} from "../Reducers/PokeCardReducer"
import Pokecard from "./PokeCard";
import { useQuery } from 'react-query'
import PokeService from "../services/PokeService";
import Pokeball from "./Pokeball";

const Pokelist = () =>{

    const { isLoading, data, isError } = useQuery(`poke-service`, () => {
        return PokeService.getList(2);
      });

      useEffect(() => {
        if (data?.data) {
          setPokemos(data.data.pokes);
        }
      }, [data]);


    
    const [colors,setColors] = useState([]);
    const [pokemons,setPokemos] = useState([]);

    const pokeCard = useSelector(state => state.pokeCard.pokecard)
    const text = useSelector(state => state.text.text);
    const type =useSelector(state => state.type.type);

    const dis = useDispatch();

    useLayoutEffect(()=>{
        setColors(colorsData)
       
    },[]);


    let PokeList = () =>{
        let filteredPokemons = pokemons;

        if (text !== "" && type !== "") {
          filteredPokemons = pokemons.filter(
            (pokemon) =>
              pokemon.types.some((typ) => typ.type.name === type) &&
              pokemon.name.includes(text)
          );
        } else if (text !== "") {
          filteredPokemons = pokemons.filter((pokemon) =>
            pokemon.name.includes(text)
          );
        } else if (type !== "") {
          filteredPokemons = pokemons.filter((pokemon) =>
            pokemon.types.some((typ) => typ.type.name === type)
          );
        }
      
        return filteredPokemons;
    }

    if (isLoading) {
        return <Pokeball/>;
      }
    
      if (isError) {
        return <h2>Error 404</h2>;
      }
    

    return(
        <div>
            <div className="list-pokemon">
                {PokeList().map((pokemon) => (
                <div onClick={()=>{dis(changePoke(pokemon))}} key={pokemon.id} className="pokemon-card" style={{backgroundColor: colors[pokemon.types[0].type.name]}}>
                    <img src={pokemon.sprites.front_default}/>
                    <p className="pokemon-title">{pokemon.name}</p>
                    <p className="pokemon-id"> <b>#</b> {pokemon.id}</p>
                    <p className="pokemon-types"><span className="pokemon-type">{pokemon.types[0].type.name}</span>  {pokemon.types[1] && <span><span>&</span> <span className="pokemon-type"> {pokemon.types[1].type.name}</span> </span>}</p>                    
                </div>))}
            </div>
            {Object.keys(pokeCard).length !== 0 && <Pokecard pokemon={pokeCard} colors={colors}></Pokecard>}
        </div>
    )
}

export default Pokelist;