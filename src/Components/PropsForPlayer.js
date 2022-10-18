import React from 'react'

const PropsForPlayer = ({data}) => {
    let value=data
    let icon=['🟠','🔵']
    let players=[]
    for(i=1;i<=2;i++){
        players.push(`Player${i}`)
    }
    for(i=0;i<=2;i++){
        let d=i
        if(value[`Player${d+1}`]==='in'){
            players[i]=<span>{icon[i]}</span>
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default PropsForPlayer
