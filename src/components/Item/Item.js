import React from 'react'
import '../../App.css'

function Item({ data, color }) {
    return (
        <div className="item" style={{borderTop: `4px solid ${color}` }}>
            {data}
        </div>
    )
}

export default Item;
