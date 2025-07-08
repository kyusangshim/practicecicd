import React, {useState} from 'react';

function Reacthook() {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(prev => prev + 1);
    }

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}

export default Reacthook;