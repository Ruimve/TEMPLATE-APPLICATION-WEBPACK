import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export const queryData = createAsyncThunk("sponsors/queryData", async () => {
  const response = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('成功');
    }, 2000);
  });
  return response;
});

interface State {
  data: { a: string, b: number };
  loading: boolean;
}

const initialState: State = {
  data: { a: '观众小明', b: 18 },
  loading: false
}

export const sponsorsSlice = createSlice({
  name: 'sponsors',
  initialState,
  reducers: {
    changeData: (state, action: PayloadAction<{ a: string, b: number }>) => {
      state.data = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(queryData.pending, (state) => {
        state.loading = true;
      })
      .addCase(queryData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(queryData.rejected, (state) => {
        state.loading = false;
      })
  },
})

export const { changeData } = sponsorsSlice.actions;

export default sponsorsSlice.reducer;