import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  person: string;
  age: number;
}

const initialState: State = {
  person: 'Nancy',
  age: 12
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changePerson: (state, action: PayloadAction<string>) => {
      state.person = action.payload;
    },
    changeAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    }
  }
})

export const { changePerson, changeAge } = homeSlice.actions;

export default homeSlice.reducer;