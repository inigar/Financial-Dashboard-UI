import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AddTransaction() {
  const { addTransaction, role } = useContext(AppContext);
  const [form, setForm] = useState({
    title: "", amount: "", category: "", type: "expense"
  });

  if (role !== "admin") return null;

  return (
    <div className="mt-4">
      <input placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})}/>
      <input placeholder="Amount" type="number" onChange={(e) => setForm({...form, amount: +e.target.value})}/>
      <button onClick={() => addTransaction(form)}>Add</button>
    </div>
  );
}
