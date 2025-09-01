import {useNavigate,Link} from 'react-router'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addNewRecipe} from '../features/recipe/recipeSlice.js'
import {nanoid} from '@reduxjs/toolkit'

const AddedNewRecipe =()=>{

const dispatch= useDispatch()
const navigate =useNavigate()




let newRecipe =useSelector(state=>state.recipe.newRecipe)


const backHome =()=>{
	navigate('/')

}

	return(
	
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
		{newRecipe && <h1>working</h1>}
		{!newRecipe && <h1>not working</h1>}
	
		{newRecipe && 
		
		
		<div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full transform transition duration-500 hover:scale-105">
		<img src={newRecipe.image} alt={newRecipe.name} className="w-full h-64 object-cover rounded-lg mb-6 shadow-md" />
		 <h1 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">{newRecipe.name}</h1>
		 <h2 className="text-xl font-bold text-gray-700 mt-6 mb-2">Ingredients:</h2>
		 <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
		 {newRecipe.ingredients.map((ing, index)=>(
		     <li key={index} className="text-lg">{ing}</li>
		 ))}
		 </ul>
		 <h2 className="text-xl font-bold text-gray-700 mt-6 mb-2">Instructions:</h2>
		 <p className="text-lg text-gray-600 leading-relaxed mb-6">{newRecipe.instruction}</p>
		 <div className="grid grid-cols-2 gap-4 text-center text-sm font-medium text-gray-600">
		 <h1>Time to Prepare: <span className="font-semibold text-gray-800">{newRecipe.prepTimeMinutes} Minutes</span></h1>
		 <h1>Time to Cook: <span className="font-semibold text-gray-800">{newRecipe.cookTimeMinutes} Minutes</span></h1>
		 </div>
		 <button 
		 onClick={()=>backHome()}
		 className="mt-8 w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
		 >
		 Goto Home
		 </button>
		 
		</div>
		
		} 

		</div>
	)
}

export default AddedNewRecipe
