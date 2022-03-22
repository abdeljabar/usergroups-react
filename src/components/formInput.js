const FormInput = ({ value, source, type, label, handleChange, hideLabel }) => {
  return (
    <>
      {!hideLabel && <label style={{ display: "block" }}>{label}</label>}
      <input
        type={type}
        name={source}
        placeholder={hideLabel && label}
        value={value}
        onChange={(e) => handleChange(e)}
        className="input"
      />
    </>
  );
};

export default FormInput;
