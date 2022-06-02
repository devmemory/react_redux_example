import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('get_user',
    async (num) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${num}`)

        console.log('[api] call')

        return res.data
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: 'N/A',
    reducers: {
    },
    extraReducers: {
        [getUser.fulfilled]: (_, { payload }) => {
            return payload
        }
    }
})

export default userSlice.reducer