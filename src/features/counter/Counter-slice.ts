import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import landingData from '../../utils/services/Landing';

interface CounterState {
    value: number;
    isAuthenticated: boolean;
}

const initialState: CounterState = {
    value: 16,
    isAuthenticated: false
}

export const setAuthState = createAsyncThunk('auth/checkAuth', 
    async() => {
        const response = await landingData.then((response) => {return response});
        return response.data;
    }
)

const counterSlice = createSlice({name: 'counter', initialState, 
    reducers: {
    //increment
        incremented(state){
            state.value++;
        },
    //decrement
        decremented(state){
            state.value++;
        },
    //reset 
        resetted(state){
            state.value = 0;
        },
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setAuthState.fulfilled, (state, action) => {
            state.isAuthenticated = false;
        })
    } 
})

export const {incremented, amountAdded} = counterSlice.actions;
export default counterSlice.reducer;