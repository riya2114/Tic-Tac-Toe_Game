import React, { useState } from 'react';
import styles from './TicTacToe.module.css';
import Row from './Row';

const TicTacToe = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isState, setIsState] = useState(true);
    const handleClicked=(index)=>{
        if(!state[index] && !checkWinner()){
            const copyState = [...state];
            copyState[index] =  isState ? "X" : "O";
            setState(copyState);
            setIsState(!isState);
        }
    }
    const handleButton = () =>{
        setState(Array(9).fill(null));
    }
    const checkWinner=()=>{
        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winner){
            const [a,b,c] = logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        if(state.every((cell)=>cell!==null)){
            return "Draw";
        }
        return false;
    }
    const isWinner = checkWinner();
    let message = "";
    let players = "";
    if(isWinner === "Draw"){
        message = "Game is Draw";
    }
    else if(isWinner){
        message = `Player ${isWinner} won the game`;
    }
    else{
        players = `Player ${isState ? "X" : "O"} please move...`;
    }
  return (
    <>
       <h1 className={styles.heading}>Tic Tac Toe Game</h1>
        <div className={styles.board}>
            <h4>{players}</h4>
            <div className={styles.boardRow}>
                <Row onClick={()=>handleClicked(0)} value={state[0]}/>
                <Row onClick={()=>handleClicked(1)} value={state[1]}/>
                <Row onClick={()=>handleClicked(2)} value={state[2]}/>
            </div>
            <div className={styles.boardRow}>
                <Row onClick={()=>handleClicked(3)} value={state[3]}/>
                <Row onClick={()=>handleClicked(4)} value={state[4]}/>
                <Row onClick={()=>handleClicked(5)} value={state[5]}/>
            </div>
            <div className={styles.boardRow}>
               <Row onClick={()=>handleClicked(6)} value={state[6]}/>
               <Row onClick={()=>handleClicked(7)}value={state[7]}/>
               <Row onClick={()=>handleClicked(8)} value={state[8]}/>
            </div>
        </div>
        <div className={styles.items}>
        <h4 className={styles.winner}>{isWinner ? message : ""}</h4>
        <button className={styles.playButton} onClick={handleButton}>Play Again</button>
        </div>
    </>
  )
}

export default TicTacToe;