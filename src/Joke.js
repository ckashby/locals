import React, { useEffect, useState } from 'react';

function Joke() {
    const [ joke, setJoke ] = useState({});

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(json => {
            // console.log("Joke: ", json);
            setJoke(json);
        })
    }, []);

    const { setup, punchline } = joke;

    return(
        <div>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
        
    )
}

export default Joke;