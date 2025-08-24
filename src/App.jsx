
//import React from 'react'
//import {Route,Routes} from 'react-router'
//import { useState } from 'react'

import './App.css'
/*import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Faq from './components/Faq.tsx'
import FeatureSection from './components/FeatureSection.tsx'
import NewsLetter from './components/NewsLetter.tsx'
import Footer from './components/Footer.tsx'
import Blog from './components/Blog.tsx'
import BlogData from './components/BlogData.tsx'
import Todo from './components/Todo.tsx'
import Quiz from './components/Quiz.tsx'
import StepperForm from './components/StepperForm.tsx'*/
import Home from './pages/Home.jsx'
import {useSelector} from 'react-redux'
function App() {
  
	const counter =useSelector(state=>state.counter.value)
  return (
    <>
    <Home />


      <h1>{counter}</h1>


	</>
	)
}
export default App
