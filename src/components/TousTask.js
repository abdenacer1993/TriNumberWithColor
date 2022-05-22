import React,{useState,setState} from 'react'
import Button from 'react-bootstrap/Button';
import Number from './Number';
import {RandNumCol} from '../date'

function TousTask({addNum,list}) {
  const zero=0
  const [num, setNum] = useState(0)  
  const handleClick = ()=>{
    addNum(num)
    
  }  
  return (
    <div>
        <input type="text" placeholder={zero} style={{marginTop:'30px'}} onChange={(e)=>setNum(e.target.value)} /> 
        <Button variant="outline-primary" style={{marginLeft:'10px'}} onClick={handleClick} >Confirm</Button>
        <br/>
        <Button variant="outline-warning" style={{marginTop:'30px'}}>Sort</Button>
        {list.map(el =><p style={{display:"flex" , flexDirection:"row",alignContent:"space-between"}}>{el.num}</p>)}
    </div>
  )
}

export default TousTask