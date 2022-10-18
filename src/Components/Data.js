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
const Snakes = [{ from: 62, to: 55,mess:'🐍 go to 55' },
{ from: 34, to: 25, mess:'🐍 go to 25' },
{ from: 48, to: 31,mess:'🐍 go to 31' },
{ from: 89, to: 55,mess:'🐍 go to 55' },
{ from: 82, to: 75 ,mess:'🐍 go to 75'},
{ from: 18, to: 2,mess:'🐍 go to 2' },
{ from: 97, to: 30,mess:'🐍 go to 30' }
]
const Ladders = [{ from: 12, to: 30 ,mess:'🔺 go to 30'},
{ from: 44, to: 60 ,mess:'🔺 go to 60'},
{ from: 70, to: 85 ,mess:'🔺 go to 85'},
{ from: 79, to: 96,mess:'🔺 go to 96' },
{ from: 39, to: 60 ,mess:'🔺 go to 60'}]
Snakes.forEach(element => {
    gameData.forEach(element2 => {
        if (element.from === element2.id) {
            element2.to = element.to
            element2.icon=element.mess
        }
    })
});
Ladders.forEach(element => {
    gameData.forEach(element2 => {
        if(element.from===element2.id){
            element2.to=element.to
            element2.icon=element.mess
        }
    });
});
gameData.forEach(element => {
    if(element.id===100){
        element.icon='🏆'
    }
});
gameData.forEach(element => {
    if(element.id===1){
        element.icon='Start'
        element.players.Player1='in'
        element.players.Player2='in'
    }
});
Ladders.forEach(element => {
    if(gameData[element.from].players.Player1==='in'){
        console.log('this is ladder')
    }
});
export default gameData