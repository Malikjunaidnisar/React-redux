import {useSelector,useDispatch} from 'react-redux'
import {useState,useEffect} from 'react'
import {removeRecipe,updateRecipe,filterRecipe,deleteItem	} from '../features/recipe/recipeSlice.js'
import {Link,useNavigate} from 'react-router'
const  Recipe =()=>{
		const [isUpdate,setIsUpdate] = useState(false)
		const recipes=useSelector(state=>state.recipe.recipes)
		const filter = useSelector(state=>state.recipe.filter)
		const [input,setInput]=useState({
			id:'',
			name:'',
			ingredients:[],
			recipe:''
		})
		
		const [ingredients,setIngredients] = useState(input.ingredients)
		
		useEffect(()=>{
		if(filter.length > 0){
		input.id=filter[0].id
		input.name=filter[0].name
		input.ingredients=filter[0].ingredients,
		input.recipe=filter[0].recipe,
		input.ingredients.map((ing)=>(
			input[ing]=ing
		))
		
		setInput((prev)=>(
			{...prev}
		))
		
		}
			
		},[filter])
		
	
		const [ing,setIng] = useState()
		
		
	
		
		
		const dispatch=useDispatch()
		
		const deleteRecipe=(id)=>{
		
			dispatch(removeRecipe(id))
			
		}
	
		const navigate = useNavigate()
		const handleIsUpdate=(id)=>{
			setIsUpdate(!isUpdate)
		//	dispatch(updateRecipe(id))
			dispatch(filterRecipe(id))
			
			
			
			
		}
		const handleInput=(e)=>{
			setInput((prev)=>(
				{...prev,[e.target.name]:e.target.value}
			))
			
			
		}
		const handleUpdate=()=>{
			
			//setIsUpdate(!isUpdate)
			
			
			dispatch(updateRecipe(input))
			
		}
		const handleIngredients=(e,i)=>{
			
			
			
			
			setInput((prev)=>(
				{...prev,[e.target.name]:e.target.value}
			))			
			
			
			
			
			
		}
		const handleDeleteList=(id,ing,i,ind)=>{
			dispatch(deleteItem({id,ing,i,ind}))
		}
	return(
		<>
		<Link to='/'>Home</Link>
		<h1>Recipe</h1>
		
		<button className='cursor-pointer border' onClick={()=>navigate('/addrecipe')}>Add recipe</button>
		{!isUpdate && <div className='grid grid-cols-2'>
		{recipes.map((recipe,i)=>(
		<div>
		<h1>{recipe.name}</h1>
		{recipe.ingredients.map((ing,ind)=>(
		<>
			<li>{ing}</li>
			<button onClick={()=>handleDeleteList(recipe.id,ing,i,ind)}>delete</button>
		</>
		))}
		<p>{recipe.recipe}</p>
		<button onClick={()=>deleteRecipe(recipe.id)} className='cursor-pointer border'>Delete</button>
		<button type="button" onClick={()=>handleIsUpdate(recipe.id)} className='cursor-pointer border'>Update</button>
		
		
		</div>
			
		))}
		
		</div>}
		{isUpdate && (	
			
			<div>
			<div>
			
			
			<label htmlFor='recipe-name'>Recipe Name</label>
			<input type='text' name='name' value={input.name} onChange={handleInput} />
			</div>
			<div>
			{filter[0].ingredients.map((ing,i)=>(
				<>
				<div>
				<label htmlFor={`ing${i}`}>Ing:{i}</label>
				<input type="text" id={`ing${i}`} onChange={(e)=>handleIngredients(e,i)} name={ing} value={input[ing]} />
				</div>
				</>
			))}
			<div>
			<label htmlFor='recipe-description'>Recipe Desc:</label>
			<textarea id='recipe-description' cols="20" rows="2" name='recipe' value={input.recipe} onChange={handleInput} ></textarea>
			</div>
			<div>
			<button onClick={()=>handleUpdate()} className="cursor-pointer border">Save Changes</button>
			</div>
			</div>
			
			
			</div>
		)}
		{!recipes.length && <h1>Pls add Recipes</h1>}
		</>
	)
}
export default Recipe
