import React from 'react';
import InputTypeDetail from './InputTypeDetail';
import BoxType from './BoxType';

function InputType() {
    return (
        <div>
            <InputTypeDetail type="text" />
            <InputTypeDetail type="password" />
            <InputTypeDetail type="email" />
            <InputTypeDetail type="number" />
            <InputTypeDetail type="date" />
            <InputTypeDetail type="time" />
            <InputTypeDetail type="datetime-local" />
            <InputTypeDetail type="tel" />
            <BoxType />
        </div>
    )
}

export default InputType;