import React from 'react';
import Card from './Card';

const Board = ({ tickets }) => {
    return (
        <div className="board">
            {tickets.map((group, index) => (
                <div key={index}>
                    <h2>{group.label}</h2>
                    {group.tickets.map((ticket) => (
                        <Card key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
