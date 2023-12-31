import React from 'react'
import './List.css'

const List = ({items}) => {
  return (
    <div className='listContainer'>
        {items.map(item => {
            return (
                <p>{item}</p>
            )
        })}
    </div>
  )
}

export default List