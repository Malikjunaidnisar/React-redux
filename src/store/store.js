import {configureStore} from '@reduxjs/toolkit'
import recipeReducer from '../features/recipe/recipeSlice.js'
//import counterReducer from '../features/counter/counterSlice.js'
console.log(recipeReducer)
export const store = configureStore({
	reducer:{
		recipe:recipeReducer
	//	counter:counterReducer
	}
})


