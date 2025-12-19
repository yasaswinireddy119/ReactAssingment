import { useState } from "react";

// ComponentA
function ComponentA() {
  return <h2>Status is TRUE</h2>;
}

// ComponentB
function ComponentB() {
  return <h2>Status is FALSE</h2>;
}

function StatusToggle() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={toggleStatus}>
        Toggle Status
      </button>

      {/* Conditional Rendering */}
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;
