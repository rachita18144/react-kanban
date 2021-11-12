import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Item from '../Item/Item'
import '../../App.css'

/* TODO: This is the component for 
column. This component will receive
the task list as parameter and it will
render each task using the item component

Optimization-
Use propType validation for 
each component
*/


function Column({ itemList, colTitle, color }) {
    const [showModal, setShowModal] = useState(false);

    const openAddNewTaskModal = () => {
        setShowModal(true);
    };

    const addItem = (task, column) => {
        console.log(task);
        itemList.push(task);
        setShowModal(false);
    };

    return (
        <div className="column">
            <header className="columnHeading"> 
                <h3>
                    {colTitle}
                </h3>
            </header>
            <div className="items">
            {
                itemList.map((i, index) => (
                    <Item
                        key={index}
                        data={i} 
                        color={color}
                    />
                ))
            }
            </div>
            <div>
                {showModal &&
                (<Modal
                showModal={showModal}
                setShowModal={setShowModal}
                columnTitle={colTitle}
                addItem={addItem}
            ></Modal>)}

            </div>
            <button className="addNew" onClick={openAddNewTaskModal}>
                + Add task
            </button>
        </div>
    )
}

export default Column;
