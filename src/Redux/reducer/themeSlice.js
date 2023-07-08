import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'themeApp',
  initialState: {
    value: "light"
  },
  reducers: {
    updateTheme: (state, action) => { // action là data truyền vào từ payload
        // console.log(state, action)
      state.value = action.payload
    }
  },
})

export const { updateTheme } = themeSlice.actions


export const themeValue = (state) => {
    // console.log(state)
    return state.theme.value
}

export default themeSlice.reducer
