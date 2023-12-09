import React from 'react';

const Card = ({ ticket }) => {
    return (
        <div className="card">
            <div className={`priority priority-${ticket.priority}`}>{ticket.priority}</div>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
        </div>
    );
};

export default Card;

