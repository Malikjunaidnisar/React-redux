import {Outlet} from 'react-router'
import NavBar from './NavBar.jsx'

const Layout=()=>{
	return(
		<>
		<NavBar />
		<Outlet />
		</>
	)
}

export default Layout
