import { useState } from "react";

import "./App.css";

const labas = import.meta.env.VITE_LABAS;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>RASIUKAS MYLIUKAS</h1>
      </div>
    </div>
  );
}

export default App;
