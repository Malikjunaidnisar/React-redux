import {useSelector} from 'react-redux'
import {Link} from 'react-router'

const Home = ()=>{
	const recipe=useSelector(state=>state.recipe[0])
	
	return (
		<>
		
		<h1>This is home page</h1>
		
		</>
	)
}

export default Home
