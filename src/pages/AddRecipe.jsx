import {useNavigate,Link} from 'react-router'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addRecipe} from '../features/recipe/recipeSlice.js'
import {nanoid} from '@reduxjs/toolkit'

const AddRecipe =()=>{
const [input,setInput] =useState({
	id:nanoid(),
	name:'',
	extra:'',
	ingredients:[],
	recipe:''
})
const dispatch= useDispatch()
const navigate =useNavigate()
/*const recipeObj ={
	id:nanoid(),
	ingredients:[1],
	recipe:'this'
	
}*/

const handleInput=(e)=>{
	setInput((prevData)=>({
		...prevData,[e.target.name]:e.target.value
	}))
}


const state =useSelector(state=>state.recipe)
const handleSubmit=(e)=>{
	e.preventDefault()
	

	dispatch(addRecipe(input))
	
	
}
const handleIngredients =(e)=>{
	e.preventDefault()
	
	
	
	
	
	input.ingredients[input.ingredients.length]=input.extra
	
	input.extra =""
	
	setInput((prev)=>(
		{...prev}
	))
}
	return(
		<>
		<Link to='/recipe'>Recipe</Link>
		<form onSubmit={(e)=>handleSubmit(e)}>
		<div>
		<label htmlFor='recipe-name'>Recipe Name</label>
		<input id='recipe-name' name='name' type='text' onChange={handleInput} value={input.name}/>
		</div>
		<div>
		<label htmlFor='recipe-ingredients'>Recipe Ingredients</label>
		<input id='recipe-ingredients' name='extra' type='text' onChange={handleInput}  value={input.extra} />
		<button type='submit' className="cursor-pointer border" onClick={handleIngredients}>Add Ingredients</button>
		</div>
		<div>
		<label htmlFor='recipe-description'>Recipe Description</label>
		<textarea id='recipe-description' name='recipe' cols="10" rows="4"  onChange={handleInput} value={input.recipe} placeholder='Type Recipe Description Here'></textarea>
		</div>
		<button type='submit' className='border cursor-pointer'>add</button>
		</form>
		
		</>
	)
}

export default AddRecipe
