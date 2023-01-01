import React,{useState,useRef} from 'react'
import { ApiInsert } from '../service'
import { Add } from '../styles'

export  const BtnInsert = ({Event}) =>{
        const valuesInputRef = useRef("")

        const SendDatas = ()=>{
                const values =  valuesInputRef.current.value
                ApiInsert(values)
                Event({update:true})
        }
        
        return (
                <Add className="add">
                        <input type="text" ref={valuesInputRef} />
                        <h1 onClick={SendDatas}>+</h1>
                </Add>
        )
}