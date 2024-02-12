import React, { useState } from "react";
import "./index.css"; // Import CSS file

const TransactionFormPage = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (amount, description) => {
    event.preventDefault();

    setAmount("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="transaction-form-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <select
            placeholder="choose category"
            name="category"
            value={category}
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionFormPage;
