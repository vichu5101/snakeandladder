function csvDataFile(counter) {
    let matchDataFile = ""
    matchDataFile += "Player,Player Moves,Player Position,Dice"
    matchDataFile += "\r\n"
    for (let i of counter) {
        matchDataFile += i.Player + "," + i.PlayerMoves + "," + i.PlayerPosition + "," + i.Dice
        matchDataFile += "\r\n"
        if (counter.length - 1 === counter.indexOf(i)) {
            matchDataFile += i.Player + " won the Match"
            matchDataFile += "\r\n"
        }
    }
    let tempBlob = new Blob([matchDataFile], { type: "text\csv" })
    //download url which is temporary
    let tempURL = window.URL.createObjectURL(tempBlob)
    let activation = document.createElement("a")
    activation.href = tempURL
    //forcing this activation or forcefully downloading
    activation.download = "SnakeAndLadderGame.csv"
    //forceful click
    activation.click()
    window.URL.revokeObjectURL(tempURL)
    activation.remove()
}

export default csvDataFile