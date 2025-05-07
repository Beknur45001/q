import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlise"
import productReduser from "./product/productSlise"

export const myStore = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReduser
    }
})

export default myStore