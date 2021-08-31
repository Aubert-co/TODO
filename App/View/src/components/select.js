import React,{useState,useEffect} from "react"
const Select = ({setSelect})=>{
        
        const [EventValue,SetEvent] = useState(5)
        const ChangeValues = (e)=>{
                SetEvent(e.target.value)
                setSelect(e.target.value)
                
        }
   return( 
        <select  value={EventValue} onChange={(e)=>{ChangeValues(e)}}>
              
                <option value="5">5m</option>
                <option value="10">10m</option>
                <option value="15">15m</option>
                <option value="30">30m</option>
                <option value="60">1hr</option>
                <option value="120">2hr</option>
                <option value="180">3hr</option>
                <option value="240">4hr</option>
        </select>)
}

export default Select