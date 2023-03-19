import { createSlice, PayloadAction, createAsyncThunk, isRejected } from '@reduxjs/toolkit';

export const queryData = createAsyncThunk("sponsors/queryData", async (type: 'success' | 'fail') => {
  const response = await new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if(type === 'success'){
        resolve('成功');
      }else{
        reject('失败');
      }
    }, 2000);
  });
  return response;
});

interface State {
  data: { a: string, b: number };
  status: 'loading' | 'success' | 'fail';
}

const initialState: State = {
  data: { a: '观众小明', b: 18 },
  status: 'loading'
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
        state.status = 'loading';
      })
      .addCase(queryData.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = 'success';
      })
      .addCase(queryData.rejected, (state) => {
        state.status = 'fail';
      })
  },
})

export const { changeData } = sponsorsSlice.actions;

export default sponsorsSlice.reducer;