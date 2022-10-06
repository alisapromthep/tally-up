import React from 'react'

const Player = ({name,score}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{score}</p>
        </div>
    )
}

export default Player