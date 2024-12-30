import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  useEffect(() => {
    passwordGenerator();
  }, [length, char, num, setPassword]);

  const passwordGenerator = useCallback(() => {
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
  }, [length, char, num, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

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
          ref={passwordRef}
        />
        <button onClick={copyPassword}>Copy</button>
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
