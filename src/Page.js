import React, { useState } from "react";

export const Page = () => {

  const [showQRCode, setShowQRCode] = useState(false);
  const [input, setInput] = useState('');

  const correctInput = '2930313233'

  const handleOnClick = () => {
    if(input === correctInput) {
      setShowQRCode(true);
    }
  }

  return (
    <div style={{flexDirection: 'row'}}>
      {showQRCode && (
        <div>QR CODE</div>
      )}
      <div>
      Enter some text
      </div>
      <input onChange={(e) => setInput(e.target.value)} value={input}></input>
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
};
