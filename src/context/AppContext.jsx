import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Salary", amount: 30000, category: "Income", type: "income", date: "2026-03-01" },
    { id: 2, title: "Groceries", amount: 2000, category: "Food", type: "expense", date: "2026-03-02" },
    { id: 3, title: "Netflix", amount: 500, category: "Entertainment", type: "expense", date: "2026-03-03" },
  ]);

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  // LocalStorage persistence
  useEffect(() => {
    const data = localStorage.getItem("transactions");
    if (data) setTransactions(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  return (
    <AppContext.Provider value={{
      transactions,
      addTransaction,
      role,
      setRole,
      search,
      setSearch
    }}>
      {children}
    </AppContext.Provider>
  );
};
