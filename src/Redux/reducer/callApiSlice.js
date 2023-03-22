import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isData: [],
  isError: {
    status: false,
    message: "",
  },
};

export const fetchApi = createAsyncThunk(
  "callApiThunk/fetchApi",
  async () => {
    console.log("fetchApi")
    //   const response = await client.get('/fakeApi/users')
    return [1, 2, 3, 4];
  }
);

const callApiSlice = createSlice({
  name: "CallApiThunk",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchApi.pending, (state) => {
        // pending case
        state.isLoading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        //success case
        state.isLoading = false;
        state.isSuccess = true;
        if(action.payload) state.isData = action.payload
        console.log("action.payload", action.payload)
      })
      .addCase(fetchApi.rejected, (state, action) => {
        //rejected case
        state.isLoading = false;
        if (action.payload) state.errors = action.payload;
      }),
});

export const dataCallApi = (state) => state.fetchApiData
export default callApiSlice.reducer;
