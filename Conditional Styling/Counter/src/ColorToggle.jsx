import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      
      <div
        style={{
          width: "200px",
          height: "100px",
          margin: "20px auto",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Color Box
      </div>

      <button onClick={toggleColor}>
        Toggle Color
      </button>

    </div>
  );
}

export default ColorToggle;
