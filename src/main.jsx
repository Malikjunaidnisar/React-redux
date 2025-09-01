
import { StrictMode } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Recipe from './pages/Recipe.jsx'
import AddRecipe from './pages/AddRecipe.jsx'
import SingleRecipe from './pages/SingleRecipe.jsx'
import AddedSingleRecipe from './pages/AddedSingleRecipe.jsx'
import UpdateRecipe from './pages/UpdateRecipe.jsx'

import { createRoot } from 'react-dom/client'
import { BrowserRouter ,RouterProvider,createBrowserRouter} from 'react-router'
import './index.css'
import App from './App.jsx'
import {store} from './store/store.js'
import {Provider} from 'react-redux'

const router = createBrowserRouter([
	{
		path:"/",
		Component : Layout,
		children:[
			{
				path:'/',
				element:<Home />
			},
			{
				path:'/about',
				element:<About />
			},
			{
				path:'/recipe',
				element:<Recipe />
			},
			{
				path:'/addrecipe',
				element:<AddRecipe />
			},
			{
				path:'/recipe/:id',
				element:<SingleRecipe />
			},
			{
				path:'/addedsinglerecipe',
				element:<AddedSingleRecipe />
			},
			{
				path:'/updaterecipe/:id',
				element:<UpdateRecipe />
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	//<BrowserRouter >
 // <StrictMode>
  //</StrictMode>,
	//</BrowserRouter >
	
   	//<App />
	<Provider store={store}>
	<RouterProvider router={router} />
	</Provider>
	
)
