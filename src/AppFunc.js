import React, { useState } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";

const AppFunc = () => {
  const [hackersData, setHackersData] = useState([]);
  const [errorData, setErrorData] = useState([]);
  const [dateData, setDateData] = useState([]);

  const handleMealsSchedule = (
    newHackers,
    notAddedHackersNames,
    arrayOFDates
  ) => {
    if (notAddedHackersNames.length > 0) {
      setErrorData(notAddedHackersNames);
    } else {
      setErrorData([]);
      setHackersData(newHackers);
      setDateData(arrayOFDates);
    }
  };

  return (
    <div className="container-fluid">
      <center>
        <h2>Hacker Hostel</h2>
      </center>
      <div className="container">
        <Bookings handleMealsSchedule={handleMealsSchedule}></Bookings>
        <center>
          {errorData.length > 0 && (
            <Error
              errorData={errorData}
              handleMealsSchedule={handleMealsSchedule}
            ></Error>
          )}
          {hackersData.length > 0 && (
            <Meals
              hackersData={hackersData}
              dateData={dateData}
              handleMealsSchedule={handleMealsSchedule}
            ></Meals>
          )}
        </center>
      </div>
    </div>
  );
};

export default AppFunc;
