import { useEffect, useLayoutEffect, useState } from "react";
import colorsData from "../data/colors"
import { useSelector,useDispatch } from "react-redux";
import {changePoke,dropPoke} from "../Reducers/PokeCardReducer"
import Pokecard from "./PokeCard";



const Pokelist = () =>{

    
    const [colors,setColors] = useState([]);
    const [pokemons,setPokemos] = useState([]);
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const pokeCard = useSelector(state => state.pokeCard.pokecard)
    const text = useSelector(state => state.text.text);
    const type =useSelector(state => state.type.type);

    const dis = useDispatch();

    useLayoutEffect(()=>{
        setColors(colorsData)
        for(let i = 1; i < 128; ++i){
            fetch(`${url + i}`).then(data => data.json()).then(poke => setPokemos(pokemons => [...pokemons,poke]));
        }
    },[]);

    let PokeList = () =>{
        if(text === "" & type === ""){
            return pokemons;
        }else if(type === ""){
            return pokemons.filter(pokemon => pokemon.name.includes(text))
        }else if(text === ""){
           
            return pokemons.filter(pokemon => pokemon.types.some(typ => { return typ.type.name === type}))
        }else{
            return pokemons.filter(pokemon => { return pokemon.types.some(typ => { return typ.type.name === type}) & pokemon.name.includes(text)})
        }
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