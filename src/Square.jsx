import React from 'react';

const style = {
    background: '#e8fcfc',
    border: '2px solid teal',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    color: 'blue',
    outline: 'none',
};

const Square = ({ square, index, handleMove }) => {
    return (
        <button
            style={style}
            onClick={() => handleMove(index)}
            disabled={square !== null}
        >
            {square}
        </button>
    );
};

export default Square;