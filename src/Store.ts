import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/Counter-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;