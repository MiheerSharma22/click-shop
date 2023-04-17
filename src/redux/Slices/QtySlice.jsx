import { createSlice } from "@reduxjs/toolkit";


export const QtySlice = createSlice({
    name:"qty",
    initialState: {value:0,
        qtyarr:[]
    },
    reducers:{
        increaseQty: (state,action)=> {
            state.value += Number(action.payload);
            state.qtyarr[state.qtyarr.length] = (state.value);
        },
        decreaseQty: (state,action)=> {
            state.value -= Number(action.payload);
            state.qtyarr[state.qtyarr.length] = (state.value);
        },
        setInitialValue: (state,action) =>{
            state.value = Number(action.payload);
            state.qtyarr[state.qtyarr.length] = (state.value);
        }
    }
});

export const {increaseQty,decreaseQty,setInitialValue} = QtySlice.actions;
export default QtySlice.reducer;