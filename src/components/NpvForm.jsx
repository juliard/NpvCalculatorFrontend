import React, { useState } from "react";
import './NpvForm.css';

function NpvForm({ onSubmit }) {
  const [form, setForm] = useState({
    initialInvestment: "",
    lowerBoundRate: "",
    upperBoundRate: "",
    increment: "",
    cashFlows: [""],
  });

  const updateCashFlow = (index, value) => {
    const updated = [...form.cashFlows];
    updated[index] = value;
    setForm({ ...form, cashFlows: updated });
  };

  const addCashFlow = () => {
    setForm({ ...form, cashFlows: [...form.cashFlows, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Initial Investment"
        type="number"
        value={form.initialInvestment}
        onChange={(e) =>
          setForm({ ...form, initialInvestment: e.target.value })
        }
        required
      />
      <input
        placeholder="Lower Bound Rate (%)"
        type="number"
        value={form.lowerBoundRate}
        onChange={(e) => setForm({ ...form, lowerBoundRate: e.target.value })}
        required
      />
      <input
        placeholder="Upper Bound Rate (%)"
        type="number"
        value={form.upperBoundRate}
        onChange={(e) => setForm({ ...form, upperBoundRate: e.target.value })}
        required
      />
      <input
        placeholder="Rate Increment (%)"
        type="number"
        value={form.increment}
        onChange={(e) => setForm({ ...form, increment: e.target.value })}
        required
      />

      <div>
        <label>Cash Flows:</label>
        {form.cashFlows.map((cf, idx) => (
          <input
            key={idx}
            type="number"
            value={cf}
            onChange={(e) => updateCashFlow(idx, e.target.value)}
            required
          />
        ))}
        <button type="button" onClick={addCashFlow}>
          + Add Cash Flow
        </button>
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}

export default NpvForm;
