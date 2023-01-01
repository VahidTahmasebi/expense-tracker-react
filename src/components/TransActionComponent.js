import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  // clone from all data
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  // If there is no search, enable trans
  const filteredTransaction = (searchValue) => {
    if (!searchValue || searchValue === "") {
      // update state filter
      setFilteredTnx(transactions);
      return;
    }
    // search on desc values
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(searchValue.toLowerCase()),
    );
    // update state filter
    setFilteredTnx(filtered);
  };
  // update search state
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    // passing desc values to the search function
    filteredTransaction(e.target.value);
  };

  useEffect(() => {
    filteredTransaction(searchItem);
  }, [transactions]);

  if (!transactions.length) return <h4 className="noItem">add some tnx</h4>;

  return (
    // receiving transaction and looping on it and finally display items
    <section>
      <input
        type='text'
        value={searchItem}
        onChange={changeHandler}
        placeholder='search for tnx...'
        className='search'
      />
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              className='transaction'
              key={t.id}
              style={{
                borderRight:
                  t.type === "expense" ? "4px solid red" : "4px solid green",
              }}>
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          ))
        : "no item matchs!"}
    </section>
  );
};

export default TransActionComponent;
