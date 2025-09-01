import {useNavigate,Link} from 'react-router'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addNewRecipe} from '../features/recipe/recipeSlice.js'
import {nanoid} from '@reduxjs/toolkit'

const AddRecipe =()=>{
const [input,setInput] =useState({
	//id:nanoid(),
	name:'',
	image:'',
	ingredients:[],
	instruction:'',
	prepTimeMinutes:'',
	cookTimeMinutes:''
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


let newRecipe =useSelector(state=>state.recipe.newRecipe)
const handleSubmit=(e)=>{
	
	e.preventDefault()
	

	//dispatch(addRecipe(input))
	delete input.extra
	navigate('/addedsinglerecipe')
	dispatch(addNewRecipe(input))
	
	
	
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
		<div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
  <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Add a New Recipe</h2>
      <Link to='/recipe' className="text-blue-500 hover:text-blue-700 font-medium">
        Back to Recipes
      </Link>
    </div>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor='recipe-name' className="block text-sm font-medium text-gray-700 mb-1">Recipe Name</label>
          <input 
            id='recipe-name' 
            name='name' 
            type='text' 
            onChange={handleInput} 
            value={input.name}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <label htmlFor='recipe-image' className="block text-sm font-medium text-gray-700 mb-1">Upload Image URL</label>
          <input 
            id='recipe-image' 
            name='image' 
            type='text' 
            onChange={handleInput}  
            value={input.image}
            placeholder="e.g., https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>
      </div>

      <div>
        <label htmlFor='recipe-ingredients' className="block text-sm font-medium text-gray-700 mb-1">Recipe Ingredients</label>
        <div className="flex items-center space-x-2">
          <input 
            id='recipe-ingredients' 
            name='extra' 
            type='text' 
            onChange={handleInput}  
            value={input.extra || ''} 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            placeholder="Type ingredient and click 'Add'"
          />
          <button 
            type='button' 
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out" 
            onClick={handleIngredients}
          >
            Add
          </button>
        </div>
        {input.ingredients.length > 0 && (
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {input.ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm">{ingredient}</li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label htmlFor='recipe-description' className="block text-sm font-medium text-gray-700 mb-1">Recipe Instructions</label>
        <textarea 
          id='recipe-description' 
          name='instruction' 
          rows="4"  
          onChange={handleInput} 
          value={input.instruction} 
          placeholder='Type Recipe Instructions Here...'
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor='prepTime' className="block text-sm font-medium text-gray-700 mb-1">Preparation Time (minutes)</label>
          <input 
            id='prepTime' 
            name='prepTimeMinutes' 
            type='text' 
            onChange={handleInput}  
            value={input.prepTimeMinutes}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <label htmlFor='cookTime' className="block text-sm font-medium text-gray-700 mb-1">Cooking Time (minutes)</label>
          <input 
            id='cookTime' 
            name='cookTimeMinutes' 
            type='text' 
            onChange={handleInput}  
            value={input.cookTimeMinutes}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>
      </div>

      <button 
        type='submit' 
        className='w-full px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 ease-in-out'
      >
        Add Recipe
      </button>
    </form>
  </div>
</div>
	)
}

export default AddRecipe
