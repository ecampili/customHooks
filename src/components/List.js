import React from 'react'
import Card from './Card'

const List = ({ currentItems }) => {
    return (
        <div className="container">
            {currentItems.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default List
