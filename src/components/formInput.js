const FormInput = ({ record, source, type, label, handleChange }) => {
  return (
    <>
      <label style={{ display: "block" }}>{label}</label>
      <input
        type={type}
        name={source}
        value={record && record[source]}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default FormInput;
