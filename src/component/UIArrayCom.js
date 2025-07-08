import React from 'react';

function UIArrayCom(props) {
    return (
        <ul id='itemlist'>
            {props.itemlist.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default UIArrayCom