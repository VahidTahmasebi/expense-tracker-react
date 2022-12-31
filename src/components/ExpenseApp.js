import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValue) => {
    // receive form value and Assign id
    setTransactions([...transactions, { ...formValue, id: Date.now() }]);
  };

  useEffect(() => {
    let expenseValue = 0;
    let incomeValue = 0;
    
    transactions.forEach((t) => {
      t.type === "expense"
        ? (expenseValue += parseFloat(t.amount))
        : (incomeValue += parseFloat(t.amount));
    });
    setExpense(expenseValue);
    setIncome(incomeValue);
  }, [transactions]);

  return (
    <section className='container'>
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
