import { createSlice } from '@reduxjs/toolkit'
import { initialNodes } from '../initialData'

const nodeReducers = createSlice({
    name: 'nodes',
    initialState: { nodes: initialNodes },
    reducers: {
        updateNodes: (state, action) => {
            state.nodes = action.payload
        }
    }
})

export const  {updateNodes} = nodeReducers.actions; 
export default nodeReducers.reducer;