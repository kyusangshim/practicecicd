// components/LightModeForm.tsx
import React from "react";

const LightMode = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white transition-colors">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">☀️ 라이트 모드</h1>
      <form className="bg-gray-100 p-6 rounded shadow-md w-80">
        <label className="block text-gray-700 mb-2">이름</label>
        <input
          type="text"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
          placeholder="이름을 입력하세요"
        />

        <label className="block text-gray-700 mb-2">이메일</label>
        <input
          type="email"
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
          placeholder="이메일을 입력하세요"
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          제출
        </button>
      </form>
    </div>
  );
};

export default LightMode;
