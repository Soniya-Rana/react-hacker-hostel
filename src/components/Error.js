import React from "react";

const Error = ({ errorData }) => {
  if (!errorData || errorData.length === 0) {
    return <div></div>;
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
      <div id="list">
        <div className="error-msg">
          {errorData.length > 0
            ? errorData.map((data, index) => {
                return (
                  <div key={index}>
                    <i className="fa fa-times-circle"></i>
                    <p>Error! No menu generated for {data}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Error;
