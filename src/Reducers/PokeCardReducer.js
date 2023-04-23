import { createSlice } from "@reduxjs/toolkit";


const PokeCardReducer = createSlice({
    name:"Pokecard",
    initialState:{
        pokecard: []
    },
    reducers:{
        changePoke: (state,actions) =>{
            state.pokecard = actions.payload
        },
        
    }
})

export const {changePoke} = PokeCardReducer.actions;

export default PokeCardReducer.reducer;