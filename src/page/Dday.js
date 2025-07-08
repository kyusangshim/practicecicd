import React, { useState } from 'react';

function Dday() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const trans = () => {
        const today = new Date();
        const target = new Date(value);
        const diff = target.getTime() - today.getTime();
        console.log(diff);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setResult(diffDays);
    }


    return (
        <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl text-center space-y-6">
            <h2 className="text-2xl font-bold">D-Day 계산기</h2>

            <input
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="숫자를 입력하세요"
                className="w-full p-3 border rounded-md text-center text-lg"
            />


            <button
                className="w-full bg-green-500 text-white py-3 rounded-lg text-lg hover:bg-green-600 transition"
                onClick={trans}
            >
                계산하기
            </button>

            {result !== null && (
                <p className="text-lg font-semibold">
                    {result > 0 ? `${result}일 남았습니다.` : `${result * -1}일 지났습니다.`}
                </p>
            )}

        </div>
    );
}

export default Dday;
