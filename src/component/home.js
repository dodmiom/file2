import React from 'react'

var Assassin= require('../image/assassin.png');
export default function Home() {
  return (
    <>
        <div className='container'>
        <div className=' d-grid'>
         <div className=' mt-5' style={{fontSize:"60px",fontWeight:"bold",fontFamily: "'League Spartan', sans-serif"}}>
            Welcome To Our Website
         </div>
         <p style={{fontSize:"30px",wordWrap:"break-word"}} >
         Hello My Name Is Bishesh..
         

            
         </p>
         
         
        </div>
        <div>
            <img src={Assassin} alt='' style={{width:"450px",position:"absolute",bottom:"90px",right:"8px"}} />
        </div>
        

        </div>
    </>
  )
}
