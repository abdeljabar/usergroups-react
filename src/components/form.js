import React, { useState } from "react";
import { useMutation } from "react-query";
import axioss from "../utils/axiosInstance";

const Form = ({ resource, to, id, children }) => {
  const mutation = useMutation((record) => {
    return axioss.post(`/${resource}`, record);
  });

  const [formData, setFormData] = useState({});

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
      <div>
        {mutation.isLoading ? (
          "Creating a record..."
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Record created!</div> : null}

            <form
              action="#"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(formData);
              }}
            >
              {React.Children.map(children, (child) => {
                console.log(child);
                return (
                  <div key={child.props.source}>
                    {React.cloneElement(child, {
                      source: child.props.source,
                      //record: id && !isLoading && result ? result.data : null,
                      handleChange: handleChange,
                      value: formData[child.props.source],
                    })}
                  </div>
                );
              })}
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
