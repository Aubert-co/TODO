import React,{useContext} from 'react'
import Api from '../service/index'
const {ApiDelete}  =Api


return function DeleteButton(id,Event){
    const clickDelete = (id)=>{
        ApiDelete(id)
        Event({update:true})
    }
    return (
        <div className="itens" >
            <i className="material-icons"  onClick={e=>clickDelete(id)} >delete</i>
        </div>
    )
}