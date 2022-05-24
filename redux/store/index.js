import { configureStore } from '@reduxjs/toolkit';

import account from '../slices/accountSlice';

const store = configureStore({
    reducer: {account},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;