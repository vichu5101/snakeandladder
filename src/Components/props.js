import React from 'react'
import './props.css'
const Props = ({ value, data, icon }) => {
    let object = data
    // for(let i=1;i<=)
    let Player1;
    let Player2;
    if (object.Player1 === 'in') {
        Player1 = <span>🟠</span>
    }
    if (object.Player2 === 'in') {
        Player2 = <span>🔵</span>
    }
    return (
        <div className='lop' id={`Box${value.toString()}`}>
            <div className='playerContainer'>
                {Player1}
                {Player2}
            </div>
            <div id='boxNum'>{value}</div>
            <div className='powerUps'>
                <div id='boxIcon'>{icon}</div>
            </div>
        </div>
    )
}

export default Props
