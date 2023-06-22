import React from 'react'
import Button from '@mui/material/Button';
import Example2 from './modal2';
import Todo from './todo';


export default function Todobody(props) {
    const { deleteitem,elem,keyy,togcom}=props;
    const handletog=()=>{
        togcom(elem.id);
    }
    return (
        <>

            <tr key={keyy} >
                
                <th className='fs-3 text-wrap' style={{textDecoration: Todo.completed?"line-through":null}}>{elem}</th>


                <th >
                <Example2 onClick={ deleteitem}/>
                    
                    <input type='checkbox'style={{float:"right",position:"absolute",right:"290px"}} onClick={handletog} className="form-check-input"  value="" id="flexCheckDefault"  />
                </th>
            </tr>
        </>
    )
}
