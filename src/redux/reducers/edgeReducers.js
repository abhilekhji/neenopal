import { createSlice } from '@reduxjs/toolkit'
import { initialEdges } from '../initialData'

const edgeReducers = createSlice({
    name: 'edges',
    initialState: initialEdges
})

export default edgeReducers.reducer;