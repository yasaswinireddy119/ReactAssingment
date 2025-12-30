

import { useState, lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React.memo & Lazy Loading Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
