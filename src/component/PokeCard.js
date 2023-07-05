import {changePoke} from "../Reducers/PokeCardReducer"
import { useDispatch } from "react-redux";


const Pokecard = ({pokemon,colors}) =>{


    const dis = useDispatch();

    const closePopUp = (e) =>{
       
        if(e.target !== e.currentTarget){
        e.stopPropagation();
       }else{
        dis(changePoke([]))
       }
       
    }

    const typeList = (pokemon) =>{
        const list = pokemon.types.map((typ) =>(
         typ.type.name   
        ))

        return list
    }

    

    return(
        <div className="popup" onClick={closePopUp}>
            <div className="poke_card" style={{backgroundColor: colors[pokemon.types[0].type.name]}}>
                <div className="card_img">
                    <img src={pokemon.sprites.front_default} alt="defult"/>
                </div>
                <div className="card_info">
                    <h4>{pokemon.name.toUpperCase()}</h4>
                    <div className="card_types">
                        {typeList(pokemon).map(type => <span className="type-card" style={{backgroundColor : colors[type] }}>{type}</span>)}
                    </div>
                    <div className="card-stats">
                        <span style={{backgroundColor: colors[pokemon.types[0].type.name]}} className="hp-stat stat" >HP   <div>{pokemon.stats[0].base_stat}</div></span>
                        <span style={{backgroundColor: colors[pokemon.types[0].type.name]}} className="atc-stat stat">ATK  <div>{pokemon.stats[1].base_stat}</div></span>
                        <span style={{backgroundColor: colors[pokemon.types[0].type.name]}} className="def-stat stat">DEF  <div> {pokemon.stats[2].base_stat}</div> </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pokecard;