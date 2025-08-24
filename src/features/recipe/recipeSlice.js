import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={

recipes:[
	{
		id:nanoid(),
		name:'biryani',
		ingredients:['aalu','timatar','chicken','chawal','lassan','lalmirch powder','namak'],
		recipe:'use above ingredient'
	},
	{
	    id:nanoid(),
	    name:'biryani',
	    ingredients:['aalu','timatar','chicken','chawal'],
	    recipe:'use above ingredient'
	}
],
filter:[]
}
export const recipeSlice=createSlice({
	name:'Recipe',
	initialState,
	
	reducers:{
		addRecipe:(state,action)=>{
		/*	const newRecipe ={
				id:nanoid(),
				name:action.payload,
				ingredients:[],
				recipe:''
			}*/
			
			state.recipes.push(action.payload)
		},
		removeRecipe:(state,action)=>{
			const id= action.payload
			
			const recipe=state.recipes.findIndex(rec=>rec.id == id)
			state.recipes.splice(recipe,1)
			
		},
		
		updateRecipe:(state,action)=>{
			const{ingredients} =action.payload
			const a = []
			ingredients.map((ing,i)=>{
				
			//	ingredients[i] =input[ing]
			if(ingredients[i] == ing){
			//	ingredients.splice(i,1,'add')
				a.push(action.payload[ing])
			//	alert(action.payload[ing])
			}
			}
			)
			action.payload.ingredients=a
		
			const {id} = action.payload
			const recipe=state.recipes.findIndex(rec=>rec.id == id)
		//alert(Object.values(action.payload))
			
			if(recipe != -1){
			
				state.recipes.splice(recipe,1,action.payload)
			}
		},
		filterRecipe:(state,action)=>{
		const id = action.payload
			state.filter = state.recipes.filter(rec=>rec.id === id)
		},
		deleteItem:(state,action)=>{
			const {id,ing,i,ind} = action.payload
			
			//state.recipes.map((recipe,i)=>{
			
				if(id == state.recipes[i].id && state.recipes[i].ingredients[ind] == ing){
					state.recipes[i].ingredients.splice(ind,1)
				
					
				}
		//	})
		}
	}
})

export const {deleteItem, addRecipe,removeRecipe,updateRecipe,filterRecipe} =recipeSlice.actions
export default recipeSlice.reducer
