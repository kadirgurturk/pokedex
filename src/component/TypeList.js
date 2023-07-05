import { useState } from "react";
import colours from "../data/colors"
import types from "../data/types";
import {changeType} from "../Reducers/TypeReducer"
import { useSelector,useDispatch } from "react-redux";


const TypeList = () =>{

    const [colors,setColors] = useState(colours);
    const [typesList,setTypesList] = useState(types);
    const selectedType = useSelector(state => state.type.type);
    const dis = useDispatch();

   console.log(selectedType);
    
    return(
        <div className="typelist">
            <a type="button" style={{backgroundColor: "lightgrey"}} onClick={()=>{dis(changeType(""))}} >All</a>
            {typesList.map(type =>(<a key={type.type} type="button" style={{backgroundColor: colors[type.type], opacity : selectedType === type.type ? "1" : "0.6",cursor:"pointer"}} onClick={()=>{dis(changeType(type.type))}}>{type.type}</a>))}
        </div>
    )
} 

export default TypeList;
