
import React from 'react'
import { Routes} from 'react-router';
import { Link ,useNavigate,Route,BrowserRouter} from 'react-router-dom';



export default function Nav(props) {

    return (
        <div>
            <div> 
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><Link disabled className="navbar-brand " style={{ textAlign: "center", margin: "50px",fontFamily: "'Cabin', sans-serif" ,color:"#ed008c",fontSize:"28px"
}}> JUST CREATIVITY
                        </Link></div>
                        <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
                            <ul className="navbar-nav  mr-auto" >
                                <li className="nav-item active fs-4">
                                    <Link className="nav-link" to="/" >Home </Link>
                                </li>
                               
                               
                               
                                    <li className="nav-item dropdown fs-2  ">
                                        <button className="btn btn-secondary fs-5  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ProjectList
                                        </button>
                                        <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item text-light bg-info " to="/project/todolist">TodoList</Link>
                                        
                                            <Link className="dropdown-item text-light bg-primary" to="/">Something else here</Link>
                                        </div>
                                    </li>
                                    
                                
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}
