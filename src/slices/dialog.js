import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
    name: 'dialog',
    initialState: { value: false },
    reducers: {
        open: (state) => {
            state.value = true
        },
        close: (state) => {
            state.value = false
        }
    }
})

export const { open, close } = dialogSlice.actions

export default dialogSlice.reducer