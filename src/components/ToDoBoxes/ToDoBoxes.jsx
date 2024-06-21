import React from 'react'
import ToDoBoxStyles from './ToDoBoxes.module.css'

const ToDoBoxes = ({icon,title, desc}) => {

  return (
    <div className= {ToDoBoxStyles.boxFeature}>
        <div className={ToDoBoxStyles.boxIcon}>
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default ToDoBoxes