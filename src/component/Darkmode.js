// components/DarkModeForm.tsx
import React from "react";

const DarkModeForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 transition-colors">
      <h1 className="text-3xl font-bold text-white mb-8">🌙 다크 모드</h1>
      <form className="bg-gray-800 p-6 rounded shadow-md w-80">
        <label className="block text-gray-300 mb-2">이름</label>
        <input
          type="text"
          className="w-full px-3 py-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="이름을 입력하세요"
        />

        <label className="block text-gray-300 mb-2">이메일</label>
        <input
          type="email"
          className="w-full px-3 py-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="이메일을 입력하세요"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          제출
        </button>
      </form>
    </div>
  );
};

export default DarkModeForm;
