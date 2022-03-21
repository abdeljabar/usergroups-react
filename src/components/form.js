import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Form = ({ resource, to, id, children }) => {
  const {
    data: result,
    isLoading,
    error,
  } = useQuery(
    id,
    () => {
      return axios.get("http://localhost:8080" + id);
    },
    { id }
  );

  console.log("result", result);

  return (
    <>
      <div>
        <form action="#" method="post">
          {React.Children.map(children, (child) => {
            console.log(child);
            return (
              <div key={child.props.source}>
                {React.cloneElement(child, {
                  source: child.props.source,
                  record: result ? result.data : null,
                })}
              </div>
            );
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
