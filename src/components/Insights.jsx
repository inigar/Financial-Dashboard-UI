import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const categoryTotals = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  , "None");

  return (
    <div className="mt-4">
      <h3>Insights</h3>
      <p>Highest spending category: {highest}</p>
      <p>Total transactions: {transactions.length}</p>
    </div>
  );
}
