import { AppProvider } from "./context/AppContext";
import SummaryCards from "./components/SummaryCards";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Insights from "./components/Insights";
import RoleToggle from "./components/RoleToggle";

export default function App() {
  return (
    <AppProvider>
      <div className="p-4">
        <RoleToggle />
        <SummaryCards />
        <AddTransaction />
        <TransactionList />
        <Insights />
      </div>
    </AppProvider>
  );
}
