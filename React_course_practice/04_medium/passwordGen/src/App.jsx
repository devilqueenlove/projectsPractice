import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    passwordGenerator();
  }, [length, char, num]);

  useCallback(() => {
    passwordGenerator();
  }, [length, char, num, password]);

  function passwordGenerator() {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (char) {
      str += "!@#$%^&*(){}[];<>";
    }
    if (num) {
      str += "1234567890";
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      let word = str[Math.floor(Math.random() * str.length)];
      pass += word;
    }
    setPassword(pass);
  }

  return (
    <div>
      <div id="data"></div>
      <div className="text-white">
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          readOnly
        />
      </div>
      <div>
        <input
          type="range"
          name="length"
          id="length"
          min={4}
          max={15}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length">Length : {length}</label>
        <br />
        <input
          type="checkbox"
          name="char"
          id="char"
          value={char}
          onChange={(e) => setChar(e.target.checked)}
        />
        <label htmlFor="char"> Characters</label>
        <br />
        <input
          type="checkbox"
          name="num"
          id="num"
          value={num}
          onChange={(e) => setNum(e.target.checked)}
        />
        <label htmlFor="num"> Numbers</label>
      </div>
    </div>
  );
}

export default App;
