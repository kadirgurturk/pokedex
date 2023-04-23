import { createSlice } from "@reduxjs/toolkit";


const TypeReducer = createSlice({
    name:"type",
    initialState:{
        type: "",
    },
    reducers:{
        changeType: (state,action) => {
            state.type = action.payload
        }
    }

});

export const {changeType} = TypeReducer.actions;
export default TypeReducer.reducer;
