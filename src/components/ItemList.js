import React from 'react'
import {Routes,Route,Link}from "react-router-dom"
import ItemDetail from './ItemDetail'

const ItemList = () => {
    const items=[{Id:"1",desc:"Item1"},{Id:"2",desc:"Item2"},{Id:"3",desc:"Item3"},{Id:"4",desc:"Item4"}]
  return (
    <div><h1>Item List</h1>
    {<ul>
        
        
        {
            items.map((item)=>{
              return  <li><Link to={`/items/${item.Id}`}>{item.desc}</Link></li>
            })
        }
        </ul>}
    
    
    
    
    </div>
    
  )
}

export default ItemList