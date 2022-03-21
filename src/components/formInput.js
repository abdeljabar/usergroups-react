const FormInput = ({ value, source, type, label, handleChange }) => {
  return (
    <>
      <label style={{ display: "block" }}>{label}</label>
      <input
        type={type}
        name={source}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default FormInput;
