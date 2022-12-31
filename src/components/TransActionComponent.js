const TransActionComponent = ({ transactions }) => {
  return (
    // receiving transaction and looping on it and finally display items
    <section>
      {transactions.length &&
        transactions.map((t) => (
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
        ))}
    </section>
  );
};

export default TransActionComponent;
