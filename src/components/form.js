import React from "react";

const Form = ({ children }) => {
  return (
    <>
      <div>
        <form action="#" method="post">
          {React.Children.map(children, (child) => {
            console.log(child);
            return (
              <div key={child.props.source}>
                <div>{child.props.label}</div>
                <input type="text" name={child.props.source} />
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
