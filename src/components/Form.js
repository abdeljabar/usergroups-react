import React from "react";

const Form = ({ formChildren, mutation, record }) => {
  const [formData, setFormData] = useState(record ? record : {});

  const handleChange = ({ currentTarget }) => {
    setFormData({
      ...formData,
      [currentTarget.name]:
        currentTarget.type === "number"
          ? parseInt(currentTarget.value)
          : currentTarget.value,
    });
    console.log("formData", formData);
  };

  const handleSubmit = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <>
      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        {React.Children.map(formChildren, (child) => {
          console.log(child);
          return (
            <div key={child.props.source}>
              {React.cloneElement(child, {
                source: child.props.source,
                handleChange: handleChange,
                value: formData[child.props.source],
              })}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
