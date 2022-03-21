const Field = ({ record, source, label, showLabel }) => {
  return (
    <>
      {showLabel && <div>{label}</div>}
      <div>{record[source]}</div>
    </>
  );
};

export default Field;
