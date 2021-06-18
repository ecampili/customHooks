import React from 'react'

const Card = ({ item, handleClick }) => {

    return (
        <div className="card" onClick={() => handleClick(item)}>

            <div>{item.id}</div>
            {/* <img src={item.image} alt={item.name} /> */}
            <h3>{item.name} </h3>
            <img src={item.image} alt={item.name} />
            <p>{item.body}</p>
        </div>
    )
}

export default Card
