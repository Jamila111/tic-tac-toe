import React, { useState } from 'react';
import Board from "./Board";
import History from "./History";

const Game = () => {
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [nextPlayer, setNextPlayer] = useState('X');
    const [gameStatus, setGameStatus] = useState('');
    const [winningLine, setWinningLine] = useState(null);
    const [history, setHistory] = useState({ X: 0, O: 0, Draw: 0 });

    const getWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: lines[i] };
            }
        }
        return null;
    };

    const handleMove = (index) => {
        if (board[index] || gameStatus) return setBoard(board[index]);

        const newBoard = board.map((square, ind) => (
            index === ind ? nextPlayer : square
        ));

        setBoard(newBoard);

        const result = getWinner(newBoard);
        if (result) {
            setGameStatus(`Winner: ${result.winner}`);
            setWinningLine(result.line);
            setHistory(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
        } else if (!newBoard.includes(null)) {
            setGameStatus('Draw!');
            setHistory(prev => ({ ...prev, Draw: prev.Draw + 1 }));
        } else {
            setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
        }
    };

    const resetGame = () => {
        setBoard(initialBoard);
        setNextPlayer('X');
        setGameStatus('');
        setWinningLine(null);
    };

    return (
        <div>
            <h1>Tic-Tac-Toe Game</h1>
            <Board
                board={board}
                handleMove={handleMove}
                winningLine={winningLine}
            />
            <div>
                {gameStatus ? gameStatus : `Next Player: ${nextPlayer}`}
            </div>
            <button onClick={resetGame}>Reset Game</button>
            <History history={history}/>
        </div>
    );
};

export default Game;