import React, { Fragment, useState } from "react";
import { useMutation } from "react-query";
import axioss from "../utils/axiosInstance";

const CreateForm = ({ resource, children, to }) => {
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
      <div className="container">
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
                  <div className="form-group" key={child.props.source}>
                    {React.cloneElement(child, {
                      source: child.props.source,
                      handleChange: handleChange,
                      value: formData[child.props.source],
                    })}
                  </div>
                );
              })}
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default CreateForm;
