import { createSlice } from "@reduxjs/toolkit";


const textReducer = createSlice({
    name: "text",
    initialState:{
        text : "",
    },
    reducers:{
        changeText: (state,action) =>{
            state.text = action.payload;
        }
    }

})

export const {changeText} = textReducer.actions;

export default textReducer.reducer;