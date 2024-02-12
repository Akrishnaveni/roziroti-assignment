import React from "react";

const DashboardPage = () => {
  // Dummy data
  const transactions = [
    { id: 1, description: "Groceries", amount: -50 },
    { id: 2, description: "Salary", amount: 2000 },
    { id: 3, description: "Rent", amount: -1000 },
  ];

  // Calculate current balance
  const currentBalance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="transaction-list">
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description}: ${transaction.amount}
            </li>
          ))}
        </ul>
      </div>
      <div className="balance">
        <h3>Current Balance</h3>
        <p>${currentBalance}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
