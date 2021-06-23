import React, { useState } from 'react'
import { useModal } from '../hooks/useModal';
import Card from './Card'
import Modal from './Modal';

const List = ({ currentItems }) => {
    const { isOpen, openModal, closeModal } = useModal(false);
    const [data, setData] = useState({})

    const handleClick = (item) => {
        openModal()
        setData(item)
    }

    return (
        <>

            <div className="container">
                {currentItems.map(item => (
                    <Card key={item.id} item={item} handleClick={handleClick} />
                ))}
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <h3>{data.id} </h3>
                <p>{data.name} </p>
                <img src={data.image} alt={data.name} />
                {/* <p>{data.body}</p> */}
            </Modal>
        </>
    )
}

export default List
