import React, { useState } from 'react';

function Search() {
    const [userQuery, setUserQuery ] = useState('');

    const updateUserQuery = event => {
        setUserQuery(event.target.value);
    }

    const searchGoogle = () => {
        window.open(`https://google.com/search?q=${userQuery}`, '__blank');
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
          searchGoogle();
        }
    }

    return (
        <div>
            <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />{' '}
            <button onClick={searchGoogle} >Google Search</button>
        </div>
    )
}

export default Search;