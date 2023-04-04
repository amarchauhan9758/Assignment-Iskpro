import React, { useState } from 'react'
import "./sideBar-style.css"



function SideBar({activeItem, handleItemClick}) {
  // const [activeItem, setActiveItem] = useState(1);

  // const handleItemClick = (index) => {
  //   setActiveItem(index);
  // }


  return (
    <>
      <div className='pareent-sidebar-div'>
        <nav>
          <ul className="sideBar-list">
          <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)} >User 1</li>
          <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)} >User 2</li>
          <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)} >User 3</li>
          <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)} >User 4</li>
          <li className={activeItem === 5 ? 'active' : ''} onClick={() => handleItemClick(5)} >User 5</li>
          <li className={activeItem === 6 ? 'active' : ''} onClick={() => handleItemClick(6)} >User 6</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideBar;