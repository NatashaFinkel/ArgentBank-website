import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async (token, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/profile",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.message);
            }
            return data.body;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: { firstName: "", lastName: "" },
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.status = "loading";
            })

            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.status = "success";
                console.log(state.name);
                state.name = action.payload;
                console.log(state.name);
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.status = "fail";
                state.error = action.payload || "An error happened";
            });
    },
});

export default profileSlice.reducer;