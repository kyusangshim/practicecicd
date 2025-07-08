import React from 'react';


function InputArrayCom(props) {
    return (
        <input className='border-2 border-gray-300 rounded-md p-2' 
            type="text"
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)}
        />
    )
}

export default InputArrayCom;