import { configureStore} from '@reduxjs/toolkit'
import {songsReducer , addSong, removeSong}from './slices/songsSlice'
import {moviesReducer, addMovie, removeMovie} from './slices/moviesSlice'
import { reset } from './action';


 const store = configureStore({
    reducer: {
        song: songsReducer,
        movie: moviesReducer
    }
});

export {store}
export {addMovie, addSong, removeMovie, removeSong, reset}

