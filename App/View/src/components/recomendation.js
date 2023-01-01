import React,{useState,memo, useContext, useCallback} from 'react'
import {Recomendation} from '../styles/index'
import { Done ,Item,Itens} from '../styles/index'
import {ApiInsert} from '../service'
import  List_recommendation  from './list_recomendaton'
import { ChangeStates } from '../contexts'


function RecomenComp(){
    const [SelectCategories,SetCategories] = useState('study')

    console.log('this a recomendation')
   
    return (
        <Recomendation className="recomendation">
            <Item className="item">
                <h1>Recommended Tasks</h1>
            <select onChange={(e)=>SetCategories(e.target.value)}>
                <option value="study">Study</option>
                <option value="workout">Workout</option>
                <option value="language">Languages</option>
                <option value="programming">Programming</option>
            </select>
            <List_recommendation filterCategory={SelectCategories} />
            </Item>
        </Recomendation>
    )
}


export default memo(RecomenComp)