import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { changeText } from "../Reducers/SearchText";
import TypeList from "./TypeList";




const Header = () =>{
  
    const dis = useDispatch();
    const text = useSelector(state => state.text.text);
  
    return(
        <div className="header">
            <h3 className="header_title">Modern Pokedex</h3>
            <input placeholder="Enter Pokemon Name" value={text} onChange={(e)=>{dis(changeText(e.target.value))}}/>
            <TypeList></TypeList>
            
        </div>
    )
}

export default Header;