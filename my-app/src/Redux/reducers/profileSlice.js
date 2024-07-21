import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getProfile = createAsyncThunk(
    'user/profile',
    async ({ firstName, lastName, email, password, token }, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ firstName, lastName, email, password, token }),
            });

            const data = await response.json();
            if (response.ok) {
                const dataContent = data.body;
                localStorage.setItem('logInToken', JSON.stringify({ firstName, lastName, email, password, token }));
                return { ...dataContent };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: error.message });
        }
    }
);

const initialState = { firstName: '', lastName: '' };

const userProfile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getProfile: () => { },
        getProfileFulfilled: (state, action) => {
            const { profile } = action.payload;
            return [...state, profile.firstName, profile.lastName]
        },
        getProfileRejected: (state) => {
            return state;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.fulfilled, (state, action) => {
                const { firstName, lastName } = action.payload;
                state.firstName = firstName;
                state.lastName = lastName;
            })
            .addCase(getProfile.rejected, (state) => {
                return state;
            });
    }
});

export const { getProfileFulfilled, getProfileRejected } = userProfile.actions;
export { getProfile };
export default userProfile.reducer;