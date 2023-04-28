import React from 'react'
import './sidebarOptions.css'

const SidebarOptions = ({Icon,title,number,isActive}) => {
  return (
    <div className={`sidebarOptions ${isActive && 'sidebarOptions--active'}` }>
      <Icon/>
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOptions
