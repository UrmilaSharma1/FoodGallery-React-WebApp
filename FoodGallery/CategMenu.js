import React from 'react'
import Menu from './Menu'

const CategMenu = ({filterFood,catItems}) => {
  return (
    <>
        <div className="mt-3  container d-flex justify-content-around">
    {
        catItems.map((element,index)=>{
            return <button className="btn btn-warning filter-btn"key={index} onClick={()=>filterFood(element)}>{element}</button>
        })
    }
        {/* <button className="btn btn-warning filter-btn" onClick={()=>filterFood('Breakfast')}>Breakfast</button>
        <button className="btn btn-warning filter-btn" onClick={()=>filterFood('Lunch')}>Lunch</button>
        <button className="btn btn-warning filter-btn" onClick={()=>filterFood('Evening')}>Evening</button>
        <button className="btn btn-warning filter-btn" onClick={()=>filterFood('Dinner')}>Dinner</button>
        <button className="btn btn-warning filter-btn" onClick={()=>setItems(Menu)}>All</button> */}
      </div> 
    </>
  )
}

export default CategMenu
