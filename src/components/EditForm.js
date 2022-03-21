import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import axioss from "../utils/axiosInstance";

const EditForm = ({ id, children, to }) => {
  const mutation = useMutation((record) => {
    if (id) {
      return axioss.put(id, record);
    }
  });

  const {
    data: result,
    isLoading,
    error,
  } = useQuery(
    id,
    () => {
      return axioss.get(id);
    },
    { id }
  );

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!isLoading && !error) {
      setFormData(result.data);
    }
  }, [result]);

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
          "Updating a record..."
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

export default EditForm;
