import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const BUDGET_UPPER_LIMIT = 20000;

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const totalExpenses = expenses.reduce((total, item) => (total += item.cost), 0);
    const nBudget = event.target.value;
    if (nBudget > BUDGET_UPPER_LIMIT) {
      alert(`The budget cannot exceed ${currency}` + BUDGET_UPPER_LIMIT);
      return;
    } else if (nBudget < totalExpenses) {
      alert(`The budget cannot be lower than ${currency}` + totalExpenses);
      return;
    } else {
      setNewBudget(nBudget);
      dispatch({
        type: "SET_BUDGET",
        payload: nBudget,
      });
    }
  };
  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency} </span>
      <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};
export default Budget;
