import { createSlice } from "@reduxjs/toolkit";

const initialState={
    type:"",
};

const pokedextypeSlice = createSlice({
    initialState: initialState,
    name:"type",
    reducers:{
        choosingtype: (state, action)=>{
            const newtype=action.payload;
            state.type=newtype;
        },
    },
});

export const { choosingtype } =pokedextypeSlice.actions;

export default pokedextypeSlice.reducer;