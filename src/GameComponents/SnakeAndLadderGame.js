import React, { useState } from 'react'
import Props from './props'
import './gameStyle.css'
import gameData from './Data'
import Image from './snakeandladder.png'
import csvDataFile from './csvFile'

let count = 0
let winner = 1
let player1Moves = 1
let player2Moves = 1
let counter = [{ Player: 'Player 1', PlayerMoves: 1, PlayerPosition: 1, Dice: 0 },
{ Player: 'Player 2', PlayerMoves: 1, PlayerPosition: 1, Dice: 0 }]
const SnakeAndLadderGame = () => {
    const [player1Position, setPlayer1Position] = useState(1)
    const [player2Position, setPlayer2Position] = useState(1)
    const [player, setPlayer] = useState('winner')
    const [pointsTable, setpointsTable] = useState('dumContainer')
    const [playerTurn, setplayerTurn] = useState('Player 1 Turn')
    const [bonusDice, setBonusDice] = useState('Player 1')
    const [bonusClass, setBonusClass] = useState('bonusDice')
    const [random, setRandom] = useState(0)
    const [gameStart, setGameStart] = useState('startButton')

    function dice() {
        if (count % 2 === 0) {
            player1Moves++
            let randomNumberGenerator = Math.floor(Math.random() * 6) + 1
            let playerPosition = player1Position + randomNumberGenerator
            counter.push({ Player: 'Player 1', PlayerMoves: player1Moves, PlayerPosition: playerPosition, Dice: randomNumberGenerator })
            if ((player1Position + randomNumberGenerator) <= 100) {
                gameData.forEach(element => {
                    element.players.Player1 = ''
                });
                gameData.forEach(element => {
                    if (element.id === player1Position + randomNumberGenerator) {
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
                            setPlayer1Position(player1Position + randomNumberGenerator)
                        }
                    }
                });
                if ((player1Position + randomNumberGenerator) === 100) {
                    setPlayer('winnerAnnounce')
                    setpointsTable('dumContainer')
                    console.log(counter)
                    console.log(`Player 1 Got ${player1Moves} Moves`)
                    console.log(`Player 2 Got ${player2Moves} Moves`)
                    csvDataFile(counter)
                }
            }
            else {
                setPlayer1Position(player1Position)
            }
            let diceValue = document.getElementById('dice')
            diceValue.innerText = randomNumberGenerator
            setRandom(randomNumberGenerator)
            if (randomNumberGenerator === 1 || randomNumberGenerator === 5 || randomNumberGenerator === 6) {
                setplayerTurn('Player 1 Turn')
                setBonusDice('Player 1')
                setBonusClass('setBonusDice')
            }
            else {
                count++
                setplayerTurn('Player 2   Turn')
                setBonusDice('Player 2')
                setBonusClass('bonusDice')
            }
        }
        else {
            player2Moves++
            let randomNumberGenerator = Math.floor(Math.random() * 6) + 1
            let playerPosition = player2Position + randomNumberGenerator
            counter.push({ Player: 'Player 2', PlayerMoves: player2Moves, PlayerPosition: playerPosition, Dice: randomNumberGenerator })
            if ((player2Position + randomNumberGenerator) <= 100) {
                gameData.forEach(element => {
                    element.players.Player2 = ''
                });
                gameData.forEach(element => {
                    if (element.id === player2Position + randomNumberGenerator) {
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
                            setPlayer2Position(player2Position + randomNumberGenerator)
                        }
                    }
                });

                if ((player2Position + randomNumberGenerator) === 100) {
                    winner++
                    setPlayer('winnerAnnounce')
                    setpointsTable('dumContainer')
                    console.log(counter)
                    console.log(`Player 1 Got ${player1Moves} Moves`)
                    console.log(`Player 2 Got ${player2Moves} Moves`)
                    csvDataFile(counter)
                }
            }
            else {
                setPlayer2Position(player2Position)
            }
            let diceValue = document.getElementById('dice')
            diceValue.innerText = randomNumberGenerator
            setRandom(randomNumberGenerator)
            if (randomNumberGenerator === 1 || randomNumberGenerator === 5 || randomNumberGenerator === 6) {
                setplayerTurn('Player 2 Turn')
                setBonusDice('Player 2')
                setBonusClass('setBonusDice')
            }
            else {
                count++
                setplayerTurn('Player 1 Turn')
                setBonusDice('Player 1')
                setBonusClass('bonusDice')
            }
        }
    }


    function startGame() {
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

                    <button onClick={startGame} className={gameStart} id='startBtn'>Start</button>

                    <div className={player} id='toWinner'><h1>Player {winner}</h1><p>Won the Game</p><p> 🏆 </p></div>
                    <div className={pointsTable} id='dummy'>
                        <div className="diceRotate">
                            <button onClick={dice}>Dice 🎲</button>
                            <div id="dice">{random}</div>
                        </div>
                        <div className={bonusClass}>{bonusDice} got bonus dice</div>
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
