import React from 'react';

const History = ({ history }) => {
    return (
        <div style={{ marginTop: '20px'}}>
            <h3>Game History:</h3>
            <p>X: {history.X}</p>
            <p>O: {history.O}</p>
            <p>Draw: {history.Draw}</p>
        </div>
    );
};

export default History;