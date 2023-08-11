import React, { useState } from 'react';

function EmailVerificationForm() {
  const [email, setEmail] = useState('');

  const sendVerificationCode = async () => {
    try {
      // This is where you'd call the API that sends the verification code.
      // It's been left blank here because it depends on your backend implementation.
      await fetch('/api/send_verification_code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <button onClick={sendVerificationCode}>Send Verification Code</button>
    </div>
  );
}

export default EmailVerificationForm;
