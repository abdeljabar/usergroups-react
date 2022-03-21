const Field = ({ record, source, label, showLabel }) => {
  return (
    <>
      {showLabel && (
        <div>
          <strong>{label}</strong>
        </div>
      )}
      <div>{record[source]}</div>
    </>
  );
};

export default Field;
