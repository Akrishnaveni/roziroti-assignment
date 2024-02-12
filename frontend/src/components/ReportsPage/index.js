import React, { useEffect, useState } from "react";

import "./index.css";

const ReportsPage = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    // Fetch monthly income vs. expenses report data
    // Example:
    // fetchData().then(data => setReportData(data));
    const data = [
      { month: "february", income: 8000, expenses: 4200 },
      { month: "june", income: 7000, expenses: 8200 },
      { month: "August", income: 6800, expenses: 6200 },
    ];

    setReportData(data);
  }, []);

  return (
    <div className="container">
      <h2 className="mt-5">Reports</h2>
      <div className="row mt-3">
        <div className="col">
          <h3>Monthly Income vs. Expenses</h3>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Income</th>
                  <th>Expenses</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.month}</td>
                    <td>{item.income}</td>
                    <td>{item.expenses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
