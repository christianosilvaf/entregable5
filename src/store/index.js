import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/trainer.slice";
import pokedextypeSlice from "./slices/pokedextype.slice";

export default configureStore({
    reducer: {
        trainer: trainerSlice,
        type: pokedextypeSlice
    }
})
