let gameData = []
for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
        for (let j = i; j > (i - 10); j--) {
            gameData.push({
                id: j,
                from: j,
                icon: '',
                to: '',
                players: { Player1: '', Player2: '' }
            })
        }
    }
    else {
        for (let j = (i - 9); j <= i; j++) {
            gameData.push({
                id: j,
                from: j,
                icon: '',
                to: '',
                players: { Player1: '', Player2: '' }
            })
        }
    }
}
const Snakes = [{ from: 62, to: 55, mess: '🐍 go to 55' },
{ from: 34, to: 25, mess: '🐍 go to 25' },
{ from: 48, to: 31, mess: '🐍 go to 31' },
{ from: 89, to: 55, mess: '🐍 go to 55' },
{ from: 82, to: 75, mess: '🐍 go to 75' },
{ from: 18, to: 2, mess: '🐍 go to 2' },
{ from: 97, to: 30, mess: '🐍 go to 30' }
]
const Ladders = [{ from: 12, to: 30, mess: '🔺 go to 30' },
{ from: 44, to: 60, mess: '🔺 go to 60' },
{ from: 70, to: 85, mess: '🔺 go to 85' },
{ from: 79, to: 96, mess: '🔺 go to 96' },
{ from: 39, to: 60, mess: '🔺 go to 60' }]
Snakes.forEach(snake => {
    gameData.forEach(gameEle => {
        if (snake.from === gameEle.id) {
            gameEle.to = snake.to
            gameEle.icon = snake.mess
        }
    })
});
Ladders.forEach(ladder => {
    gameData.forEach(gameEle => {
        if (ladder.from === gameEle.id) {
            gameEle.to = ladder.to
            gameEle.icon = ladder.mess
        }
    });
});
gameData.forEach(gameEle => {
    if (gameEle.id === 100) {
        gameEle.icon = '🏆'
    }
});
gameData.forEach(gameEle => {
    if (gameEle.id === 1) {
        gameEle.icon = 'Start'
        gameEle.players.Player1 = 'in'
        gameEle.players.Player2 = 'in'
    }
});
export default gameData