import React from "react";
import { useQuery } from "react-query";
import axioss from "../utils/axiosInstance";

const Show = ({ children, id }) => {
  const {
    data: result,
    isLoading,
    error,
  } = useQuery(id, () => {
    return axioss.get(id);
  });

  console.log("result", result);

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {error && <span>There was an error loading data.</span>}
      {!isLoading && !error && result && (
        <div>
          {React.Children.map(children, (child) => {
            console.log(child);
            return (
              <div key={child.props.source}>
                {React.cloneElement(child, {
                  source: child.props.source,
                  record: result.data,
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Show;
