import React from "react";
import './ErrorDisplay.css';

function ErrorDisplay({ errors }) {
  if (!errors.length) return null;

  return (
    <div style={{ color: "red", marginTop: "1rem" }}>
      <strong>Errors:</strong>
      <ul>
        {errors.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorDisplay;
