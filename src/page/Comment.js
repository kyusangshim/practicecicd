import React from 'react';

function Comment(props) {
    return (
        <div className='bg-white p-4 border border-gray-00 rounded-md shadow-md'>
            <p className='text-sm text-gray-500'>{props.author}</p>
            <p className='text-base font-bold'>{props.content}</p>
        </div>
    )
}

export default Comment;