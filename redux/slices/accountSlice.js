import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        accountFetch: state => {state.id = 'something'}
    }
});

const {actions, reducer} = accountSlice;

export default reducer;

export const {
    accountFetch
} = actions;

