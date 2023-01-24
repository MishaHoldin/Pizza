import { createSlice } from '@reduxjs/toolkit'
import {getCartItemLs} from '../../utils/getCartItemLs'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
// const calcTotalPrice = (items) => {
//   return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
// };
 
const  {items, totalPrice} = getCartItemLs()

const initialState = {
  totalPrice,
  items,
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    addItems(state, action) {
     const findItems = state.items.find(obj => obj.id === action.payload.id)
      if (findItems) {
        findItems.count++; 
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        });
      }
       state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action) {
      const findItems = state.items.find(obj => obj.id === action.payload)
      if (findItems) {
        findItems.count -- ;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
   removeItems(state, action) {
     state.items = state.items.filter(obj => obj.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items);
    },
   clearItems(state) {
     state.items = [];
     state.totalPrice = 0;
    }
  },

})
export const {addItems,removeItems, clearItems, minusItem} = cartSlice.actions

export default cartSlice.reducer