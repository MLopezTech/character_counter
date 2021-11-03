import React from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <textarea
        type="text"
        rows={5}
        className="full_height_Width"
        onChange={e => setCount(e.target.value.length)}
      />
    </div>
  );
}
