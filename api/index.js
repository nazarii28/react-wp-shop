import axiosAuth from "../axios/axiosAuth";

export const productsApi = {
     get(params) {
       return axiosAuth.get(`/products`, {
           params
       })
    }
}

export const categoriesApi = {
    get() {
        return axiosAuth.get('products/categories')
    }
}