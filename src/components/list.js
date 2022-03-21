import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const List = ({ children, resource }) => {
  const {
    data: result,
    isLoading,
    error,
  } = useQuery(resource, () => {
    return axios.get("http://localhost:8080/" + resource);
  });

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {error && <span>There was an error loading data.</span>}
      {!isLoading && !error && result && (
        <table border="1">
          <thead>
            <tr>
              {React.Children.map(children, (child) => {
                console.log(child);
                return <th key={child.props.source}>{child.props.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {result.data["hydra:member"].map((item) => (
              <tr key={item.name}>
                {React.Children.map(children, (child) => {
                  console.log(child);
                  return (
                    <td key={child.props.source}>
                      {React.cloneElement(child, {
                        record: item,
                        source: child.props.source,
                      })}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default List;
