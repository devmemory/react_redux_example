import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "slices/counter"
import dialogReducer from "slices/dialog"
import toastReducer from "slices/toast"

export default configureStore({
    reducer: {
        counter: counterReducer,
        dialog: dialogReducer,
        toast: toastReducer
    }
})