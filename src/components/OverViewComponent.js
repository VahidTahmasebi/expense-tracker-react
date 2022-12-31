import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState();
  return (
    <>
      <div className='topSection'>
        <p>Balance: {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransaction={addTransaction} />}
      <div className='resultSection'>
        <div className='resultBox'>
          Expense
          <span>
            {expense ? expense : "-"} {expense ? "$" : ""}
          </span>
        </div>
        <div className='resultBox'>
          income
          <span>
            {income ? income : "-"} {income ? "$" : ""}
          </span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
