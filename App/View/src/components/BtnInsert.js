import React,{useState} from 'react'
import { ApiInsert } from '../service'
import { Add } from '../styles'
export  function BtnInsert({Event}){
    const [values,setValues] = useState("")
    const changeValues =({target})=>setValues(target.value)
    
    const SendDatas = (values)=>{
            ApiInsert(values)
            Event({update:true})
        }
return (
        <Add className="add">
                <input type="text" onChange={changeValues} />
                <h1 onClick={()=>SendDatas(values)}>+</h1>
        </Add>
        )
}