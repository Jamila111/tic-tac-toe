import React from 'react';
import Square from "./Square";

const style = {
    border: '4px solid teal',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    margin: 'auto',
    position: 'relative',
};

const Board = ({ board, handleMove, winningLine }) => {
    const drawLine = () => {
        if (!winningLine) return null;

        const [start, end] = [winningLine[0], winningLine[2]];
        const startPos = getPosition(start);
        const endPos = getPosition(end);

        return (
            <line
                x1={startPos.x}
                y1={startPos.y}
                x2={endPos.x}
                y2={endPos.y}
                stroke="red"
                strokeWidth="4"
            />
        );
    };

    const getPosition = (index) => {
        const size = 300; // board size
        const unit = size / 3;
        const half = unit / 2;

        const x = (index % 3) * unit + half;
        const y = Math.floor(index / 3) * unit + half;

        return { x, y };
    };

    return (
        <div style={style}>
            {board.map((square, index) => (
                <Square
                    key={index}
                    square={square}
                    index={index}
                    handleMove={handleMove}
                />
            ))}
            <svg style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
            }}>
                {drawLine()}
            </svg>
        </div>
    );
};

export default Board;