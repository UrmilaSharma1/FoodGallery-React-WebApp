import './index.css'
import Menu from './Menu'
import React from 'react'
import { useState } from 'react'
import Menutems from './Menutems'
import CategMenu from './CategMenu'

const allCatValues = [...new Set(Menu.map((e)=>e.category)),"all"]
console.log(allCatValues)

const Gallery = () => {
    const [items,setItems] =  useState(Menu);
    const [catItems, setCatItems]=useState(allCatValues);

    const filterFood =(category)=>{
        if(category==="all"){
            setItems(Menu)
            return;
        }
        const updatedItems =Menu.filter((elem)=>{
            return elem.category === category;
        })
        setItems(updatedItems)
    }
  return (
    <>
      <h2  className='text-center mt-3'>Order Your Favorite Dish</h2>
      <hr/>
      <CategMenu filterFood={filterFood} catItems={catItems}/>
    <Menutems items={items}/>
    </>
  )
}

export default Gallery
