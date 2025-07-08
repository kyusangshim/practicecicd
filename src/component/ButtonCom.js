import React from 'react';

function ButtonCom( props ) {
  return (
    <div className='ml-2'>
        <button
            onClick={""}
            type="button"
            className="bg-blue-500 text-white px-4 py-2 mt-5 rounded hover:bg-blue-600 transition"
            >
            {props.label}
        </button>
    </div>
  );
}

export default ButtonCom;
