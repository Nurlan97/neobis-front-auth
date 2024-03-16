import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const userLogin = createAsyncThunk(
    'user/login',
    async (data, {rejectWithValue}) => {
        try{
            const response = await axios.post('https://aldiyar-backender.org.kg/users/login/', data)
            return response.data
        } catch(error) {
            rejectWithValue(error.response.data)
        }
    }
)

export const userRegister = createAsyncThunk(
    'user/register',
    async (data, {rejectWithValue}) => {
        try{
            const response = await axios.post('https://aldiyar-backender.org.kg/users/register/', data)

            if(response.status !== 200) {
                throw new Error('Server Error')
            }

            return response.data
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    }
)

const initialState = {
    status: '',
    error: '',
    user: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(userLogin.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = ''
            state.user = action.payload
        })

        .addCase(userRegister.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })
        .addCase(userRegister.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(userRegister.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = ''
            state.user = action.payload
        })
    }

    
})

export default userSlice.reducer