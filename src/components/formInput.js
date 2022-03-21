const FormInput = ({ record, source, type, label }) => {
  return (
    <>
      <label style={{ display: "block" }}>{label}</label>
      <input type={type} name={source} value={record && record[source]} />
    </>
  );
};

export default FormInput;
