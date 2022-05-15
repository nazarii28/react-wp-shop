import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {categoriesApi, productsApi} from "../../api";


export const fetchCategories = createAsyncThunk(
    'products/fetchCategoriesStatus',
    async () => {
        const {data} = await categoriesApi.get()
        return data
    }
)

const initialState = {
    categories: [],
    isLoading: false
}


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.isLoading = true
        })
    },
})


export default categoriesSlice.reducer