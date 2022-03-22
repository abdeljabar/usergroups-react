import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axioss from "../utils/axiosInstance";
import { encodeIri } from "../utils/common";

const List = ({ children, resource, to, filters, isAuthenticated }) => {
  const [url, setUrl] = useState(resource);
  const [searchFilters, setSearchFilters] = useState({});

  const {
    data: result,
    isLoading,
    error,
    refetch,
  } = useQuery(resource, () => {
    return axioss.get(url);
  });

  const handleChange = ({ currentTarget }) => {
    setSearchFilters({
      ...searchFilters,
      [currentTarget.name]:
        currentTarget.type === "number"
          ? parseInt(currentTarget.value)
          : currentTarget.value,
    });
  };

  useEffect(() => {
    console.log("searchFilters", searchFilters);

    const query = Object.keys(searchFilters)
      .map(function (k) {
        if (searchFilters[k] !== "") {
          return (
            encodeURIComponent(k) + "=" + encodeURIComponent(searchFilters[k])
          );
        }
      })
      .join("&");

    setUrl(`${resource}?${query}`);

    refetch();
  }, [searchFilters, url]);

  return (
    <>
      {filters && (
        <div className="container">
          <form>
            {filters.map((filter) => {
              return (
                <>
                  {React.cloneElement(filter, {
                    handleChange: handleChange,
                    hideLabel: true,
                  })}
                  &nbsp;&nbsp;
                </>
              );
            })}
          </form>
        </div>
      )}
      {isLoading && <span>Loading...</span>}
      {error && <span>There was an error loading data.</span>}
      {!isLoading && !error && result && (
        <div className="container">
          <table>
            <thead>
              <tr>
                {React.Children.map(children, (child) => {
                  return <th key={child.props.source}>{child.props.label}</th>;
                })}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {result.data["hydra:member"].map((item) => (
                <tr key={item.name}>
                  {React.Children.map(children, (child) => {
                    return (
                      <td key={child.props.source}>
                        {React.cloneElement(child, {
                          record: item,
                          source: child.props.source,
                        })}
                      </td>
                    );
                  })}
                  <td>
                    <Link
                      to={`${to !== "/" ? to : ""}/${encodeIri(item["@id"])}`}
                    >
                      Show
                    </Link>
                    &nbsp;
                    {isAuthenticated && (
                      <Link
                        to={`${to !== "/" ? to : ""}/${encodeIri(
                          item["@id"]
                        )}/edit`}
                      >
                        Edit
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default List;
