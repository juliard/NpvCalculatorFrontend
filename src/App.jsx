import React, { useState } from "react";
import NpvForm from "./components/NpvForm";
import NpvResults from "./components/NpvResults";
import ErrorDisplay from "./components/ErrorDisplay";
import axios from "axios";
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);

  const calculateNpv = async (form) => {
    setErrors([]);
    try {
      const payload = {
        initialInvestment: parseFloat(form.initialInvestment),
        lowerBoundRate: parseFloat(form.lowerBoundRate),
        upperBoundRate: parseFloat(form.upperBoundRate),
        increment: parseFloat(form.increment),
        cashFlows: form.cashFlows.map(Number),
      };

      const username = "admin";
      const password = "password123";
      const token = btoa(`${username}:${password}`);

      const response = await axios.post(
        "https://localhost:7117/api/npv/calculate",
        payload,
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
          withCredentials: false,
        }
      );

      setResults(response.data.result);
    } catch (err) {
      if (!err.response?.data.isSuccessful)
        setErrors(err.response.data.errorMessages);
      else setErrors(["Failed to connect to backend"]);
    }
  };

  return (
    <div
      style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      <h2>NPV Calculator</h2>
      <NpvForm onSubmit={calculateNpv} />
      <ErrorDisplay errors={errors} />
      <NpvResults results={results} />
    </div>
  );
}

export default App;
