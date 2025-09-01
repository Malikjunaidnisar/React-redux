import {useNavigate,Link} from 'react-router'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {updateSingleRecipe} from '../features/recipe/recipeSlice.js'

import {nanoid} from '@reduxjs/toolkit'

const UpdateRecipe =()=>{
let recipeToUpdate =useSelector(state=>state.recipe.singleRecipe)
const [input,setInput] =useState({
	//id:nanoid(),
	name:recipeToUpdate.name,
	image:'',
	ingredients:recipeToUpdate.ingredients,
	instructions:recipeToUpdate.instruction,
	prepTimeMinutes:recipeToUpdate.prepTimeMinutes,
	cookTimeMinutes:recipeToUpdate.cookTimeMinutes
})

const dispatch= useDispatch()
const navigate =useNavigate()


const handleInput=(e)=>{
	setInput((prevData)=>({
		...prevData,[e.target.name]:e.target.value
	}))
}

const handleSubmit=(e,id)=>{
	e.preventDefault()
	delete input.extra
	navigate('/addedsinglerecipe')
	dispatch(updateSingleRecipe(id,input))
}


	return(
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			{recipeToUpdate && (
			
				<div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full">
					<h1 className="text-3xl font-bold text-center text-gray-800 mb-6">{Object.values(input)}</h1>
					<h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Recipe</h1>
					<form onSubmit={(e)=>handleSubmit(e,recipeToUpdate.id)} className="space-y-6">
						<div>
							<label htmlFor='recipe-name' className="block text-sm font-medium text-gray-700 mb-1">Recipe Name</label>
							<input id='recipe-name' name='name' type='text' onChange={handleInput} value={input.name} 
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
							/>
						</div>
						
						{input.ingredients.map((ing, index)=>(
							<div key={index}>
								<label htmlFor={`recipe-ingredients-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Recipe Ingredients</label>
								<input 
									id={`recipe-ingredients-${index}`} 
									name={`ingredients[${index}]`} 
									type='text' 
									onChange={(e) => {
										const newIngredients = [...input.ingredients];
										newIngredients[index] = e.target.value;
										setInput({...input, ingredients: newIngredients});
									}}
									value={ing}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
								/>
							</div>
						))}

						<div>
							<label htmlFor='recipe-description' className="block text-sm font-medium text-gray-700 mb-1">Recipe Instructions</label>
							<textarea 
								id='recipe-description' 
								name='instructions' 
								cols="10" rows="4"  
								onChange={handleInput} 
								value={input.instructions} 
								placeholder='Type Recipe Description Here'
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
							></textarea>
						</div>
						<div>
							<label htmlFor='prepTime' className="block text-sm font-medium text-gray-700 mb-1">Prepare Time (minutes)</label>
							<input id='prepTime' name='prepTimeMinutes' type='number' onChange={handleInput}  value={input.prepTimeMinutes} 
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
							/>
						</div>
						<div>
							<label htmlFor='cookTime' className="block text-sm font-medium text-gray-700 mb-1">Cooking Time (minutes)</label>
							<input id='cookTime' name='cookTimeMinutes' type='number' onChange={handleInput}  value={input.cookTimeMinutes} 
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
							/>
						</div>
						<button 
							type='submit' 
							className='w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300'
						>
							Save Changes
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default UpdateRecipe
