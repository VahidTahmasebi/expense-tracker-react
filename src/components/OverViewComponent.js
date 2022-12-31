import { useState } from "react";
import TransActionComponent from "./TransActionComponent";

const OverViewComponent = ({ income, expense }) => {
  const [isShow, setIsShow] = useState();
  return (
    <>
      <div className='topSection'>
        <p>Balance: {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionComponent />}
      <div className='resultSection'>
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default OverViewComponent;
