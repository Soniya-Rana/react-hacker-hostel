import React from "react";

const Error = ({ notAddedHackersNames }) => {
  if (!notAddedHackersNames || notAddedHackersNames.length === 0) {
    return <div></div>;
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
      <div id="list">
        <div className="error-msg">
          <i className="fa fa-times-circle"></i>
          <p>Error! No menu generated for {notAddedHackersNames.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
