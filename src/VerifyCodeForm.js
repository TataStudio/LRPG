import React, { useState } from 'react';

function VerifyCodeForm() {
  const [code, setCode] = useState('');

  const verifyCode = async () => {
    try {
      // Call the API that verifies the code.
      const response = await fetch('/api/verify_code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      if (data.verified) {
        console.log('Email verified successfully');
      } else {
        console.log('Email verification failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={code} 
        onChange={e => setCode(e.target.value)} 
        placeholder="Verification Code" 
        required 
      />
      <button onClick={verifyCode}>Verify Code</button>
    </div>
  );
}

export default VerifyCodeForm;
