import React, { useState } from 'react';

function TimeTrans() {
    const [value, setValue] = useState('');
    const [fromUnit, setFromUnit] = useState('일');
    const [toUnit, setToUnit] = useState('시간');
    const [result, setResult] = useState(null);

    const trans = () => {
        let temp;
        if (fromUnit === toUnit){
            setResult(value)
        }
        else if (fromUnit === '일'){
            {toUnit === '시간' ? (temp = value * 24) : (temp = value * 24 * 60)}
            setResult(temp)
        }
        else if (fromUnit === '시간'){
            {toUnit === '일' ? (temp = value / 24) : (temp = value * 60)}
            setResult(temp)
        }
        else {
            {toUnit === '일' ? (temp = value/60/24) : (temp = value / 60)}
            setResult(temp)
        }
        
        
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl text-center space-y-6">
            <h2 className="text-2xl font-bold">시간 단위 변환기</h2>

            <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="숫자를 입력하세요"
                className="w-full p-3 border rounded-md text-center text-lg"
            />

            <div className="flex items-center justify-between gap-2">
                <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                    className="w-1/2 p-3 border rounded-md text-lg"
                >
                    <option value="일">일</option>
                    <option value="시간">시간</option>
                    <option value="분">분</option>
                </select>
                <span className="text-xl">→</span>
                <select
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                    className="w-1/2 p-3 border rounded-md text-lg"
                >
                    <option value="일">일</option>
                    <option value="시간">시간</option>
                    <option value="분">분</option>
                </select>
            </div>

            <button
                className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg hover:bg-blue-600 transition"
                onClick={trans}
            >
                변환하기
            </button>

            {result !== null && (
                <p className="text-lg font-semibold">
                    변환 결과: {result} {toUnit}
                </p>
            )}
        </div>
    );
}

export default TimeTrans;
