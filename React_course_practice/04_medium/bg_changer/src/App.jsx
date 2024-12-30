import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-3 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl ">
          <button
            onClick={() => setColor("red")}
            className=" outline-none  py-2 px-3 rounded-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className=" outline-none  py-2 px-3 rounded-xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" outline-none  py-2 px-3 rounded-xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className=" outline-none  py-2 px-3 rounded-xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("magenta")}
            className=" outline-none  py-2 px-3 rounded-xl"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
