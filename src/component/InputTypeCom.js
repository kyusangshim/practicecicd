import React from 'react';

function InputTypeCom( props ) {
  return (
    <div className="mb-2">
      <label className="block font-medium mb-1">{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default InputTypeCom;