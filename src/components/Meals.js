import React, { useEffect } from "react";
import { Divider } from "@material-ui/core";

const Meals = ({ hackersData, handleMealsSchedule, dateData }) => {
  useEffect(() => {
    hackersData.map((value) => console.log("value", value));
    dateData.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    console.log(dateData);
  }, [handleMealsSchedule, dateData, hackersData]);

  return (
    <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
      <ol id="list">
        {dateData.map((data) => (
          <div key={data.name}>
            <li className="morning">
              Breakfast for {data.name} on {data.date}
            </li>
            <li className="afternoon">
              Lunch for {data.name} on {data.date}
            </li>
            <li className="night">
              Dinner for {data.name} on {data.date}
            </li>{" "}
            <Divider />
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Meals;
