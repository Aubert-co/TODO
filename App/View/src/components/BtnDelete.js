import React,{useContext} from 'react'
import {ApiDelete} from '../service/index'

export default  function DeleteButton({id,Event}){

    const clickDelete = (id)=>{
        ApiDelete(id)
        Event({update:true})
    }
    return <i className="material-icons"  onClick={e=>clickDelete(id)} >delete</i>
    
}