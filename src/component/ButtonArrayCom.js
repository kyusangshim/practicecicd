import React, {useState} from 'react';

function ButtonArrayCom(props) {
    return (
        <>
            <button className={`bg-${props.color}-500 text-white px-4 py-2 rounded-md`}
                onClick={props.function}
            > {props.name}
            </button>
        </>
    )
}

export default ButtonArrayCom