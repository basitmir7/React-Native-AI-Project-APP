import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'white',
}

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   
    setTheme: (state,action) => {
        const isDarkMode = action.payload ;
        const themeValue = isDarkMode ? 'gray' :'white'
      state.value = themeValue
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = ThemeSlice.actions

export default ThemeSlice.reducer