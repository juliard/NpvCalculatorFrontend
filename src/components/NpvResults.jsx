import React from "react";
import './NpvResults.css';

function NpvResults({ results }) {
  if (!results.length) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>NPV Results:</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Discount Rate (%)</th>
            <th>NPV</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i}>
              <td>{r.discountRate}</td>
              <td>{r.npv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NpvResults;
