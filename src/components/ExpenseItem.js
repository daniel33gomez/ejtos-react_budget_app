import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        name: name,
        cost: -10,
      },
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td>
        <span
          className="material-symbols-outlined"
          style={{ color: '#198754', cursor: "pointer" }}
          onClick={(event) => increaseAllocation(props.name)}
        >expand_circle_up
        </span>
      </td>
      <td>
        <span
          className="material-symbols-outlined"
          style={{ color: '#dc3545', cursor: "pointer" }}
          onClick={(event) => decreaseAllocation(props.name)}
        >arrow_drop_down_circle
        </span>
      </td>
      <td>
        <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
