import { configureStore } from "@reduxjs/toolkit"
import counter from "slices/counter"
import dialog from "slices/dialog"
import toast from "slices/toast"

export default configureStore({
    reducer: {
        counter,
        dialog,
        toast
    }
})