import React, { useState } from 'react';

// 로그인 사용자 이름을 받아 출력하는 컴포넌트
function Toolbar({ isLoggedIn, userName, onLoginToggle }) {
  return (
    <div style={styles.toolbar}>
      <h1 style={{ marginRight: 'auto' }}>🌐 My App</h1>
      {isLoggedIn ? (
        <>
          <span style={{ marginRight: '1rem' }}>👋 {userName}님</span>
          <button onClick={onLoginToggle}>로그아웃</button>
        </>
      ) : (
        <button onClick={onLoginToggle}>로그인</button>
      )}
    </div>
  );
}

// 최상위 App 컴포넌트
function LoginToolbarApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName] = useState('홍길동');

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLoginToggle={toggleLogin}
      />
      <main style={styles.main}>
        {isLoggedIn ? (
          <p>✔️ 로그인 상태입니다. 환영합니다!</p>
        ) : (
          <p>🔒 로그인이 필요합니다.</p>
        )}
      </main>
    </div>
  );
}

// 간단한 인라인 스타일
const styles = {
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  },
  main: {
    padding: '1rem',
  },
};

export default LoginToolbarApp;
