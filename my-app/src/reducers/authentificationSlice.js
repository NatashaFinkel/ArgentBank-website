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
                let dataContent = data.body;
                let token = dataContent.token;
                localStorage.setItem(email, token);
                return { ...data, isAuthenticated: true };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: error.message });
        }
    }
);

const authentificationSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        isAuthenticated: false,
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
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.error = action.payload.message || 'Login failed';
                state.error = "Login failed";
            });
    },
});

export const { logout } = authentificationSlice.actions;
export default authentificationSlice.reducer;