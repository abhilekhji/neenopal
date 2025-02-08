import { configureStore } from '@reduxjs/toolkit';
import edgeReducers from './reducers/edgeReducers';
import nodeReducers from './reducers/nodeReducers';

const store = configureStore({
    reducer: {
        nodes: nodeReducers,
        edges: edgeReducers
    }
});

export default store;