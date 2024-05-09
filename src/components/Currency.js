import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currencies = {
  '$': 'Dollar',
  '£': 'Pound',
  '€': 'Euro',
  '₹': 'Rupee',
}

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [isOpen, toggleOpen] = useState(false);

  const changeCurrency = (nCurrency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: nCurrency,
    });
    toggleOpen(false)
  }

  return (
    <div className="alert alert-success">
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-success dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => toggleOpen(!isOpen)}
        >
          {`Currency (${currency} ${Currencies[currency]})`}
        </button>
        <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
          {Object.keys(Currencies).map((key, index) => (
            <li key={index} onClick={() => changeCurrency(key)}>
              <a className={`dropdown-item ${key === currency ? 'active' : ''}`} href="#">{`${key} ${Currencies[key]}`}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Currency;
