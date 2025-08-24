import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
	value:0
}/*[
	{
		id:1,
		recipe:'making'
	}
]*/
export const counterSlice=createSlice({
	name:'counter',
	initialState,
	reducers:{
		increase:(state)=>{state.value+1}
	}
})

export const {increase} =counterSlice.actions
export default counterSlice.reducer
