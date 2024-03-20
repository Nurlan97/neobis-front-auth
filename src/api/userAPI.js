import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const userLogin = createAsyncThunk(
    'user/login',
    async (data, {rejectWithValue}) => {
        try{
            const response = await axios.post('https://aldiyar-backender.org.kg/users/login/', data)

            if(response.status !== 200) {
                throw new Error('Server Error')
            }

            return response.data
        } catch(error) {
            console.log(error)
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

export const userConfirmation = createAsyncThunk(
    'user/confirmation',
    async (email, {rejectWithValue}) => {
        try{
            const response = await axios.post('https://aldiyar-backender.org.kg/users/resend-confirmation-email/', {email})

            if(response.status !== 200) {
                throw new Error('Server Error')
            }
            return response.data

            
        } catch(error) {
            rejectWithValue(error.response.data)
        }
    }
)

export const getAccessToken = createAsyncThunk(
    'user/token',
    async (refreshToken, {rejectWithValue}) => {
        try{
            const response = await axios.post('https://aldiyar-backender.org.kg/users/api/token/refresh/', {refresh: refreshToken})

            if(response.status !== 200) {
                throw new Error('Server Error')
            }
            localStorage.setItem('accessToken', response.data.access)
            console.log(response.data)
            return response.data

        } catch(error) {
            rejectWithValue(error.response.data)
        }
    }
)




const initialState = {
    status: 'empty',
    error: '',
    user: {},
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        Logout: (state) => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('user_id')
            state.user = {}
            state.isAuth = false

        },
        Login: (state, action) => {
            state.user = action.payload
        },
        isAuthUser: (state, action) => {
            
            state.isAuth = action.payload
        }
    },
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

        .addCase(userConfirmation.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })
        .addCase(userConfirmation.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(userConfirmation.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = ''
           
        })
        .addCase(getAccessToken.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })
        .addCase(getAccessToken.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getAccessToken.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.error = ''
            
        })
    }

    
})

export const {Login, Logout, isAuthUser} = userSlice.actions
export default userSlice.reducer