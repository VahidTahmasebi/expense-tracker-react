import { useState } from "react";

const TransActionForm = () => {
  const [formValue, setFormValue] = useState({
    type: "Expense",
    amount: 0,
    desc: "",
  });

  // receive enw state
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        type='text'
        name='desc'
        onChange={changeHandler}
        value={formValue.desc}
      />
      <input
        type='number'
        name='amount'
        onChange={changeHandler}
        value={formValue.amount}
      />
      <div>
        <input
          type='radio'
          value='expense'
          id='expense'
          name='type'
          checked={formValue.type === "expense"}
          onChange={changeHandler}
        />
        <label for='expense'>Expense</label>
        <input
          type='radio'
          value='income'
          id='income'
          name='type'
          checked={formValue.type === "income"}
          onChange={changeHandler}
        />
        <label for='income'>Income</label>
      </div>
      <button>add transaction</button>
    </form>
  );
};

export default TransActionForm;
