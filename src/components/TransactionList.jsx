import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionList() {
  const { transactions, search, setSearch } = useContext(AppContext);

  const filtered = transactions.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-3"
      />

      {filtered.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        filtered.map(t => (
          <div key={t.id} className="border p-2 mb-2">
            {t.title} - ₹{t.amount} ({t.category})
          </div>
        ))
      )}
    </div>
  );
}
