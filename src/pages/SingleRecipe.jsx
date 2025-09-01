import {useEffect} from 'react'
import {useParams,useNavigate} from 'react-router'
import {useSelector,useDispatch} from 'react-redux'
import {getSingleRecipe,deleteSingleRecipe} from '../features/recipe/recipeSlice.js'

const SingleRecipe = ()=>{
	const {id}= useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const singleRecipe = useSelector(state=>state.recipe.singleRecipe)
	
	useEffect(()=>{
	
		dispatch(getSingleRecipe(id))
	},[])
	const deleteRecipe=(id)=>{
		navigate('/')
		dispatch(deleteSingleRecipe(id))
	}
	const updateRecipe=(id)=>{
		navigate(`/updaterecipe/${id}`)
		
	//	dispatch(deleteSingleRecipe(id))
	}
	return(
		<>
		{singleRecipe && 
		<div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
		<img src={singleRecipe.image} alt={singleRecipe.name} className="w-96 h-96 object-cover rounded-xl shadow-lg mb-6" />
		<h1 className="text-4xl font-bold text-gray-800 mb-4">{singleRecipe.name}</h1>
		<div className="flex flex-col items-center mb-6">
			<h2 className="text-2xl font-semibold text-gray-700 mb-2">Ingredients</h2>
			{singleRecipe.ingredients.map((ing, index)=>(
				<p key={index} className="text-lg text-gray-600 my-1">{ing}</p>	
			))}
		</div>
		<p className="text-xl text-center text-gray-800 leading-relaxed max-w-2xl mb-6">{singleRecipe.instruction}</p>
		<div className="flex space-x-8 mb-8">
			<p className="text-lg text-gray-600">
				<span className="font-semibold text-gray-800">Time to Prepare:</span> {singleRecipe.prepTimeMinutes} Minutes
			</p>
			<p className="text-lg text-gray-600">
				<span className="font-semibold text-gray-800">Time to Cook:</span> {singleRecipe.cookTimeMinutes} Minutes
			</p>
		</div>
		<div className="flex space-x-4">
			<button 
				onClick={()=>{updateRecipe(singleRecipe.id)}}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-200"
			>
				Update
			</button>
			<button 
				onClick={()=>{deleteRecipe(singleRecipe.id)}}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors duration-200"
			>
				Delete
			</button>
		</div>
		</div>
		}
		
		</>
	)
}

export default SingleRecipe
