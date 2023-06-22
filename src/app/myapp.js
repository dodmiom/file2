import React from 'react'
import Nav from '../todo.js/nav'
import { Link ,Routes,useNavigate,Route,BrowserRouter} from 'react-router-dom';
import Todo from '../todo.js/todo';
import Home from '../component/home';


export default function Myapp() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route exact path='/project/todolist' element={<Todo/>}/>
        <Route exact path='/' element={<Home/>}/>
    </Routes>

    </BrowserRouter>
    

    
        
    </>
  )
}
