import React from 'react';

const movie = (props) => {
    return (
        <div>
            <p>Movie name: {props.name}</p>
            <p>{props.freePlaces}</p>
            <button disabled={!props.freePlaces} onClick={props.handleReserve}>Reserve</button>
        </div>
    )
}

export default movie;