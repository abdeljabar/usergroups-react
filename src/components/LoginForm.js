import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axioss from "../utils/axiosInstance";

const CreateForm = ({ resource, children, to }) => {
  let navigate = useNavigate();

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

  if (mutation.isSuccess) {
    console.log("data", mutation.data.data);
    const { token } = mutation.data.data;
    localStorage.setItem("token", token);

    navigate("/", { replace: true });
  }

  return (
    <>
      <div>
        {mutation.isLoading ? (
          "Loginng in..."
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Login successful!</div> : null}

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

export default CreateForm;
