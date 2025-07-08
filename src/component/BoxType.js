import React from 'react';
import '../assets/style/boxStyle.css';

const boxStyle = {
    backgroundColor: 'blue',
    padding: '20px',
    color: 'white'
}


function BoxType() {
    return (
        <>
            <div style={{ backgroundColor: 'lightblue', padding: '20px', color: 'white' }}>
                인라인 스타일 박스
            </div>
            <div style={boxStyle}>
                인라인 스타일 박스 2
            </div>
            <div className="box">
                클래스 스타일 박스
            </div>
            <div className="bg-yellow-500 p-4 text-white">
                Tailwind 클래스 스타일 박스
            </div>
        </>
        
    )
}

export default BoxType;