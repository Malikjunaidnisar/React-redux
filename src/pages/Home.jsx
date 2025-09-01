import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {Link} from 'react-router'
import {getRecipes} from '../features/recipe/recipeSlice.js'

const Home = ()=>{
	const recipe=useSelector(state=>state.recipe.data)
	const isPending= useSelector(state=>state.recipe.isPending)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(getRecipes())
	},[])
	
	if(isPending){
	return <h1 className="text-center text-4xl font-bold mt-10">Loading...</h1>
	}

	return (
	
	
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-bold text-center my-8">This is home page</h1>
			
			{recipe.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{recipe.map((rec) => (
						<Link key={rec.id} to={`/recipe/${rec.id}`} className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
							<img src={rec.image} alt={rec.name} className="w-full h-48 object-cover" />
							<div className="p-4">
								<h1 className="text-xl font-semibold mb-2">{rec.name}</h1>
								<h1 className="text-sm text-gray-600 mb-1">Time to Prep: <span className="font-medium text-gray-800">{rec.prepTimeMinutes} Minutes</span></h1>
								<h1 className="text-sm text-gray-600">Time to Cook: <span className="font-medium text-gray-800">{rec.cookTimeMinutes} Minutes</span></h1>
							</div>
						</Link>
					))}
				</div>
			)}

			{recipe.length === 0 && (
				<h1 className="text-center text-2xl text-gray-500 mt-10">Please add some Recipes</h1>
			)}
		</div>
	
	)
}

export default Home
