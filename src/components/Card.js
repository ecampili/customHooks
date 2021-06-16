import React from 'react'

const Card = ({ item }) => {

    return (
        <div className="card">

            <div>{item.id}</div>
            {/* <img src={item.image} alt={item.name} /> */}
            <h3>{item.title} </h3>
            <p>{item.body}</p>
        </div>
    )
}

export default Card
