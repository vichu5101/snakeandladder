import React, { useState } from 'react'
import Props from './props'
import './gameStyle.css'
import gameData from './Data'
import Image from './snakeandladder.png'

let count = 0
let winner = 1
const SnakeAndLadderGame = () => {
    const [player1Position, setPlayer1Position] = useState(1)
    const [player2Position, setPlayer2Position] = useState(1)
    const [player, setPlayer] = useState('winner')
    const [pointsTable, setpointsTable] = useState('dumContainer')
    const [playerTurn, setplayerTurn] = useState('Player 1 Turn')
    const [random, setRandom] = useState(0)
    const [gameStart,setGameStart]=useState('startButton')
    function player1() {
        let rand = Math.floor(Math.random() * 6) + 1
        if ((player1Position + rand) <= 100) {
            gameData.forEach(element => {
                element.players.Player1 = ''
            });
            gameData.forEach(element => {
                if (element.id === player1Position + rand) {
                    if (element.to !== '') {
                        gameData.forEach(elementValue => {
                            if (element.to === elementValue.id) {
                                let indexOfEle = gameData.indexOf(elementValue)
                                gameData[indexOfEle].players.Player1 = 'in'
                            }
                        });
                        setPlayer1Position(element.to)
                    } else {
                        element.players.Player1 = 'in'
                        setPlayer1Position(player1Position + rand)
                    }
                }
            });
            if ((player1Position + rand) === 100) {
                setPlayer('winnerAnnounce')
                setpointsTable('dumContainer')
            }
        }
        else {
            console.log('got limit 1', rand)
            setPlayer1Position(player1Position)
        }
        let diceValue = document.getElementById('dice')
        diceValue.innerText = rand
        setRandom(rand)
        return rand
    }
    function player2() {
        let rand = Math.floor(Math.random() * 6) + 1
        if ((player2Position + rand) <= 100) {
            gameData.forEach(element => {
                element.players.Player2 = ''
            });
            gameData.forEach(element => {
                if (element.id === player2Position + rand) {
                    if (element.to !== '') {
                        gameData.forEach(elementValue => {
                            if (element.to === elementValue.id) {
                                let indexOfEle = gameData.indexOf(elementValue)
                                gameData[indexOfEle].players.Player2 = 'in'
                            }
                        });
                        setPlayer2Position(element.to)
                    } else {
                        element.players.Player2 = 'in'
                        setPlayer2Position(player2Position + rand)
                    }
                }
            });

            if ((player2Position + rand) === 100) {
                winner++
                setPlayer('winnerAnnounce')
                setpointsTable('dumContainer')
            }
        }
        else {
            console.log('got limit 2', rand)
            setPlayer2Position(player2Position)
        }
        let diceValue = document.getElementById('dice')
        diceValue.innerText = rand
        setRandom(rand)
        return rand
    }
    function dice() {
        if (count % 2 === 0) {
            let value = player1()
            if (value === 1 || value === 5 || value === 6) {
                setplayerTurn('Player 1 Turn')
            }
            else {
                count++
                setplayerTurn('Player 2 Turn')
            }
        }
        else {
            let value = player2()
            if (value === 1 || value === 5 || value === 6) {
                setplayerTurn('Player 2 Turn')
            }
            else {
                count++
                setplayerTurn('Player 1 Turn')
            }
        }
    }


    function startGame(v) {
        setGameStart('startButtonNone')
        setpointsTable('container')
    }

    function resetGame() {
        window.location.reload(false)
    }
    return (
        <div >
            <div className='window'>
                <header>
                    <img src={Image} alt='thisisimge' />
                    <h1>Snake 🐍 Ladder Game</h1>

                    <button  onClick={startGame} className={gameStart} id='startBtn'>Start</button>

                    <div className={player} id='toWinner'><h1>Player {winner}</h1><p>Won the Game</p><p> 🏆 </p></div>
                    <div className={pointsTable} id='dummy'>
                        <div className="diceRotate">
                            <button onClick={dice}>Dice 🎲</button>
                            <div id="dice">{random}</div>
                        </div>
                        <div id="playerTurn">{playerTurn}</div>
                        <div className='Points'>
                            <h4>Player 1 Position = {player1Position}</h4>
                            <h4>Player 2 Position = {player2Position}</h4>
                        </div>
                        <div className="resetPlayer">
                            <div className="icon">
                                <h3>Player 1 : 🟠</h3>
                                <h3>Player 2 : 🔵</h3>
                            </div>
                            <button onClick={resetGame}>Reset</button>
                        </div>
                    </div>
                </header>
                <div className='GridBox'>
                    {gameData.map(n => <Props value={n.id} data={n.players} icon={n.icon} key={n.id} toIcon={n.to} />)}
                </div>
            </div>
        </div>
    )
}

export default SnakeAndLadderGame
