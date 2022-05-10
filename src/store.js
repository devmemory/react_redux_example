import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "slices/counter"
import dialogReducer from "slices/dialog"

export default configureStore({
    reducer: {
        counter: counterReducer,
        dialog: dialogReducer
    }
})