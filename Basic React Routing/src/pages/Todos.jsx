import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2>Todos</h2>

      <div style={gridStyle}>
        {todos.map((todo) => (
          <div key={todo.id} style={cardStyle}>
            <h4>{todo.title}</h4>
            <p>
              Status:{" "}
              <strong>
                {todo.completed ? "Completed" : "Not Completed"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "16px",
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "12px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

export default Todos;
