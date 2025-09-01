import {createSlice,nanoid,createAsyncThunk} from '@reduxjs/toolkit'
import {useNavigate} from 'react-router'


export const getRecipes =createAsyncThunk('getAllRecioes',async ()=>{
//	alert('c')
	const res = await fetch('http://localhost:4000/api/v1/students')
	const data = await res.json()
	return data.data.students
	
	//return data
})

export const getSingleRecipe=createAsyncThunk('getDingleRecipe',async(id)=>{

	const res = await fetch(`http://localhost:4000/api/v1/students/${id}`)
	const data = await res.json()
	
	return data.data.student
	
})

export const addNewRecipe = createAsyncThunk('createRecipe',async(input)=>{
	
	const res = await fetch('http://localhost:4000/api/v1/students',{
		method:'post',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify(input)
	})
	
	
	const data = await res.json()
//	alert(Object.keys(data.data.newStudent))
	return data.data.newStudent
	
	
})

export const deleteSingleRecipe= createAsyncThunk('deleteSingleRecipe',async(id)=>{
	const res = await fetch(`http://localhost:4000/api/v1/students/${id}`,{method:'delete'})
	const data = await res.json()
	return
	//useNavigate('/')
})
export const updateSingleRecipe = createAsyncThunk('updateRecipe',async(id,input)=>{
	const res = await fetch(`http://localhost:4000/api/v1/students/${id}`,{
	method:'put',
	headers:{
		'Content-Type':'application/json'
	},
	body:JSON.stringify(input)
	})
	
	const data = await res.json()
	alert(Object.keys)
	return data.data.student
})
const initialState={


data:[
/*	{
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
	}*/
],
filter:[],
isPending:false,
singleRecipe:null,
newRecipe:null,
updatedRecipe:null
}

export const recipeSlice=createSlice({
	name:'Recipe',
	initialState,
	
/*	reducers:{
		addRecipe:(state,action)=>{
			const newRecipe ={
				id:nanoid(),
				name:action.payload,
				ingredients:[],
				recipe:''
			
			
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
		
	},*/
	extraReducers :(builder)=>{
		builder.addCase(getRecipes.pending,(state)=>{
		})
		builder.addCase(getRecipes.fulfilled,(state,action)=>{
			state.isPending=false
			state.data=action.payload
			
		})
		builder.addCase(getRecipes.rejected,(state,action)=>{
			state.isError=true
			throw new error('some error')
		})
		builder.addCase(getSingleRecipe.pending,(state)=>{
		state.isPending=true
			
		})
		builder.addCase(getSingleRecipe.fulfilled,(state,action)=>{
			state.isPending=false
			state.singleRecipe=action.payload
			
		})
		builder.addCase(addNewRecipe.pending,(state)=>{
		state.isPending=true
			
		})
		builder.addCase(addNewRecipe.fulfilled,(state,action)=>{

			state.isPending=false
			state.newRecipe = action.payload
		})
		builder.addCase(deleteSingleRecipe.pending,(state)=>{
		state.isPending=true
			
		})
		builder.addCase(updateSingleRecipe.pending,(state)=>{
		state.isPending=true
		})
		builder.addCase(updateSingleRecipe.fulfilled,(state,action)=>{
		state.isPending=false
			state.updatedRecipe= action.payload
		})
		/*builder.addCase(deleteSingleRecipe.fulfilled),(state)=>{
		state.isPending=false
			state.singleRecipe ='' 
		})*/
		
		
	}
})

export const {deleteItem, addRecipe,removeRecipe,updateRecipe,filterRecipe} =recipeSlice.actions
export default recipeSlice.reducer

