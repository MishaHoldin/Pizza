import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  categoryName: ['Всі'],
  sort: {
   name: "замовчуванням",
   sortProperty: "default" ,
  }
}

 const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setCategoryName(state, action) {
      state.categoryName = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
  },

})
export const { setCategoryId, setSort, setCategoryName } = filterSlice.actions

export default filterSlice.reducer