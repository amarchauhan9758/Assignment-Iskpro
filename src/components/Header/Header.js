import React, { useState } from 'react'
import './Header-style.css'

function Header() {
  const [listActive , setListActive] = useState(1);

  const handleActiveList =(index)=>{
  setListActive(index)
  }
  return (
    <>
          <ul className="navbar-list">
          <li className={listActive === 1 ? 'active' : ''} onClick={() => handleActiveList(1)} >Recent Activity</li>
          <li className={listActive === 2 ? 'active' : ''} onClick={() => handleActiveList(2)} >Contact Info</li>
          <li className={listActive === 3 ? 'active' : ''} onClick={() => handleActiveList(3)} >Profile Info</li>
          <li className={listActive === 4 ? 'active' : ''} onClick={() => handleActiveList(4)} >Address Info</li>
          <li className={listActive === 5 ? 'active' : ''} onClick={() => handleActiveList(5)} >Personal Info</li>
          <li className={listActive === 6 ? 'active' : ''} onClick={() => handleActiveList(6)} >Account Info</li>
          </ul>




    </>
  )
}

export default Header