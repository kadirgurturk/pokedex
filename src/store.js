import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./Reducers/SearchText"
import TypeReducer from "./Reducers/TypeReducer";
import PokeCardReducer from "./Reducers/PokeCardReducer";

const store = configureStore({
    reducer:{
        text : textReducer,
        type: TypeReducer,
        pokeCard: PokeCardReducer,
    }
})

export default store;