import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginAsync = createAsyncThunk(
    'user/loginAsync',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                   
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                const dataContent = data.body;
                const token = dataContent.token;
                console.log(token);
                localStorage.setItem(email, token);
                return {...data, isAuthenticated: true, ...token
                };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: error.message });
        }
    }
);

const authenticationSlice = createSlice({
    name: 'user',
    initialState: {
        name: null,
        token: null,
        isAuthenticated: false,
        authData: null,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.name = '';
            state.isAuthenticated = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.name = action.payload.name;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.authData = action.payload.authData;
                state.error = null;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.error = action.payload.message || 'Login failed';
                state.error = "Login failed";
            });
    },
});

export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;