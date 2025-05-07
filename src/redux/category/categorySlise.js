import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";


export const getCategoeyThunk = createAsyncThunk(
    "getCategory/fetch",

    async (_, thunkAPI) => {
        try {
            const res = await apiClient.get("/products/category-list")
            return res.data 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "not found")
        }
    }
        
)

const categorySlise = createSlice({
    name: "category",
    initialState: {
        category:[],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getCategoeyThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(getCategoeyThunk.fulfilled, (state,action) => {
            state.loading = false;
            state.category = action.payload;

        })
        .addCase(getCategoeyThunk.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }

})

export default categorySlise.reducer

