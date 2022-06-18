import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum environment {
    CLIENT = "CLIENT",
    SERVER = "SERVER"
}

interface state {
    alpha: boolean,
    beta: boolean,
    release: boolean,
    environment: environment,
    gameVersion: null | string,
    modLoader: null | string,
}

const initialState: state = {
    alpha: false,
    beta: false,
    release: false,
    environment: environment.CLIENT,
    gameVersion: null,
    modLoader: null,
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        toggleAlpha: (state) => {
            state.alpha = !state.alpha
        },
        toggleBeta: (state) => {
            state.beta = !state.beta
        },
        toggleRelease: (state) => {
            state.release = !state.release
        },
        changeEnvironment: (state, action: PayloadAction<environment>) => {
            state.environment = action.payload
        }
    }
})

export const filtersReducer = filtersSlice.reducer
export const { toggleAlpha, toggleBeta, toggleRelease, changeEnvironment } = filtersSlice.actions