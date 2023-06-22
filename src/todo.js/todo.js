import React, { useEffect, useState } from 'react'
import Todobody from './todobody'
import Example from './modal'




export default function Todo() {
    const [list, setlist] = useState([]);
    const [activ, setactiv] = useState("");
    const [box, setbox] = useState(false);

    
    const handlesubmit = (e) => {
        e.preventDefault();
        if (activ !== "") {
          const newtask={id: new Date().getTime().toString(),index: activ}
          const additems = [...list,newtask];
          localStorage.setItem('List',JSON.stringify([...list,newtask]));
          setlist(additems);
    
        }
        setactiv("")

        
    
    
      }
     const deleteitem=(element)=>{
          const am=list.filter((index)=>
             index.id !== element)
          
          setlist(am);
          localStorage.setItem('List',JSON.stringify(am));
          
         
          
     }
     
     useEffect(() => {
       if(localStorage.getItem("List")){
        const storedlist = JSON.parse(localStorage.getItem("List"));
        setlist(storedlist)
        
       }
       
     
      
     }, [])
     
     
    const clear=()=>{
      setlist([]);
     localStorage.removeItem("List") 
    
    }

    const togcom=(id)=>{
        setlist(
            list.map(todo =>{
                if(todo.id===id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        )
    }

    return (
        <>
            <div className='container d-flex justify-content-center'>
                <h1 style={{fontWeight:"bold",fontSize:"50px",textShadow:"2px 2px pink"}}>ToDo App</h1>
            </div>
            <div className="row container  d-flex justify-content-center">
                <table className="      table table-striped table-bordered" style={{ marginLeft: "220px" }} >

                    <thead>
                        <tr>

                            <th>Tasks To do</th>


                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {list.map((elem)=>{
                        
                        return (
                            
                            <Todobody togcom={togcom} elem={elem.index} keyy={elem.id} deleteitem={()=> deleteitem(elem.id)} list={list} setlist={setlist} setactiv={setactiv} activ={activ}/>
                        )
                    })}
                        
                    </tbody>
                </table>
            </div>
            <div className='d-flex '>
        <Example handlesubmit={handlesubmit } list={list} setlist={setlist} setactiv={setactiv} activ={activ} />
          {!list.length ?null: <button className='btn btn-primary' onClick={clear} style={{marginRight:"50px"}}>Clear All</button>}
            </div>


        </>
    )
}
