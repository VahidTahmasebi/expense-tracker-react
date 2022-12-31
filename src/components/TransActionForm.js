import { useState } from "react";

const TransActionForm = ({ addTransaction }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  // receive new state
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValue);
  };

  return (
    <form onSubmit={submitHandler}>
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
        <label htmlFor='expense'>Expense</label>
        <input
          type='radio'
          value='income'
          id='income'
          name='type'
          checked={formValue.type === "income"}
          onChange={changeHandler}
        />
        <label htmlFor='income'>Income</label>
      </div>
      <button type='submit'>add transaction</button>
    </form>
  );
};

export default TransActionForm;
