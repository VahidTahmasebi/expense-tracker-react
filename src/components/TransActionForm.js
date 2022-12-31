import { useState } from "react";

const TransActionForm = () => {
  return (
    <form>
      <input type='text' name='desc' onChange={changehandler} />
      <input type='number' name='value' onChange={changehandler} />
      <div>
        <input type='radio' value='expense' id='expense' name='type' />
        <label for='expense'>Expense</label>
        <input type='radio' value='income' id='income' name='type' />
        <label for='income'>Income</label>
      </div>
      <button>add transaction</button>
    </form>
  );
};

export default TransActionForm;
