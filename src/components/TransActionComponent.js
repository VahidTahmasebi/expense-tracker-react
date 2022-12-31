const TransActionComponent = ({ transactions }) => {
  return (
    // receiving transaction and looping on it and finally display items
    <section>
      {transactions.length &&
        transactions.map((t) => (
          <div className='transaction' key={t.id}>
            <span>{t.desc}</span>
            <span>{t.amount}</span>
          </div>
        ))}
    </section>
  );
};

export default TransActionComponent;
