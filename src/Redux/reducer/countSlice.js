import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter1',
  initialState: {
    value1: 0,
    value2: 0
  },
  reducers: {
    increment: (state) => { // state là giá trị khởi tạo
      state.value1 += 1
    },
    decrement: (state) => {
      state.value1 -= 1
    },
    abc: (state) => {
      state.value1 -= 1
    },
    incrementByAmount: (state, action) => { // action là data truyền vào từ payload
      state.value1 += action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCountValue1 = (state) => state.counter.value1
export const selectCountValue2 = (state) => state.counter.value2

export default counterSlice.reducer
