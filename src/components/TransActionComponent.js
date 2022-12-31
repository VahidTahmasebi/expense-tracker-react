const TransActionComponent = ({ transactions }) => {
  return (
    // receiving transaction and looping on it and finally display items
    <section>
      {transactions.map((t) => (
        <div key={t.id}>{t.desc}</div>
      ))}
    </section>
  );
};

export default TransActionComponent;
