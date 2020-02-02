import React from 'react'
import './index.css';

const Snake = ({ snakeDots }) => {
    return(
    <React.Fragment>
        {snakeDots.map((dot, index) => <div className="snake-dot" key={index} style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }} />)}
    </React.Fragment>)
}

export default Snake;

