import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตัวอย่างการตรวจสอบข้อมูลเบื้องต้น
    if (email === '' || password === '') {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // เรียกใช้ API สำหรับตรวจสอบการเข้าสู่ระบบที่นี่
    // ตัวอย่าง: fetch('URL ของ API', {...})
    // หลังจากตรวจสอบสำเร็จ สามารถตั้งค่า token หรือข้อมูลผู้ใช้ได้

    console.log('Email:', email);
    console.log('Password:', password);
    setError(''); // ล้างข้อความ error
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
