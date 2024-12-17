import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-blue-500">
        Click on the Vite and React logos to learn more Click on the Vite and
        React logos to learn more
      </p>
      <p className="text-blue-500 font-bold">
        Click on the Vite and React logos to learn more Click on the Vite and
        React logos to learn more
      </p>
    </>
  );
}

export default App;
