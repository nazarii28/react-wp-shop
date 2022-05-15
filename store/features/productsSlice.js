import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {productsApi} from "../../api";


export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async ({page, orderBy = 'title', order = 'asc', category, minPrice, maxPrice, search}) => {
        const params = {
            per_page: 3,
            page,
            orderby: orderBy,
            order,
            min_price: minPrice,
            max_price: maxPrice
        }
        if(category) {
            params.category = category
        }
        if(search) {
            params.search = search
        }
        return await productsApi.get(params)
    }
)

const initialState = {
    products: [],
    pages: 0,
    total: 0,
    isLoading: true,
    favorites: []
}


export const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(item => item !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.data.filter(product => product.status === 'publish')
            state.pages = action.payload.headers['x-wp-totalpages']
            state.total = action.payload.headers['x-wp-total']
            state.isLoading = false
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log('action rejected', action)
        })
    },
})

export const {addFavorite, removeFavorite} = cartSlice.actions

export default cartSlice.reducer