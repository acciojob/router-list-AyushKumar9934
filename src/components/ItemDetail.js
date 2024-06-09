import React from 'react'
import {Routes,Route, useParams}from "react-router-dom"

const ItemDetail = () => {
   let {itemId}=useParams();
  return (
    <div><h1>Item {itemId}</h1>
    <h1>Item 1</h1>
    <h1>Item 2</h1>
    <h1>Item 3</h1>
    <h1>Item 4</h1>
    <br></br>
    <p>Description for {itemId}</p></div>
  )
}

export default ItemDetail