import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Show = ({ children, iri }) => {
  const {
    data: result,
    isLoading,
    error,
  } = useQuery(iri, () => {
    return axios.get("http://localhost:8080" + iri);
  });

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
