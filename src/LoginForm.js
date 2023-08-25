import React, { useState } from 'react';

function LoginForm({ onLogin, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (event) => {
    event.preventDefault();

    // 백엔드 API 호출
    try {
      const response = await fetch("/api/login", {  // API 엔드포인트를 자신의 백엔드 주소로 변경해주세요.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // 백엔드에서 반환된 토큰 또는 사용자 정보를 저장합니다.
        // 예: localStorage.setItem('token', data.token);
        onLogin();  // 필요하다면 onLogin에 data나 다른 정보를 넘겨줄 수도 있습니다.
        onClose();
      } else {
        // 오류 처리
        const data = await response.json();
        alert(data.message || "로그인 실패");
      }
    } catch (error) {
      alert("로그인 중 오류 발생: " + error.message);
    }
  };

  return (
    <form id="loginForm" onSubmit={login}>
      <div className="modal-header">
        <h2>Login</h2>
        <span className="close" onClick={onClose}>×</span>
      </div>
      <div className="modal-body">
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;