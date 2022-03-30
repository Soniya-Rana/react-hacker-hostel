import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import _ from "lodash";
import moment from "moment";

const Bookings = ({ handleGetMealsSchedule }) => {
  const [hackersNames, setHackersNames] = useState("");
  const [hackersDates, setHackersDates] = useState("");

  const onClickGetMealsScheduleButton = () => {
    const { newHackers, notAddedHackersNames } = getHackersFromTextFields(
      hackersNames,
      hackersDates
    );
    handleGetMealsSchedule(newHackers, notAddedHackersNames);
  };

  return (
    <div className="row">
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the hacker list (one hacker per line)"
        onChange={(event) => setHackersNames(event.target.value)}
      />
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the date range for each hacker's stay (one range per line)"
        onChange={(event) => setHackersDates(event.target.value)}
      />
      <Button
        variant="outlined"
        color="primary"
        className="block-center"
        onClick={onClickGetMealsScheduleButton}
      >
        Get Meals Schedule
      </Button>
    </div>
  );
};

const getHackersFromTextFields = (nameTextField, dateTextField) => {
  const names = _.split(nameTextField, /\r?\n/);
  const dates = _.split(dateTextField, /\r?\n/);

  const newHackers = [];
  const notAddedHackersNames = [];
  for (let i = 0; i < names.length; i++) {
    try {
      const dateFromTo = dates[i].split(" to ");
      const dateFrom = moment(dateFromTo[0], "YYYY-MM-DD");
      const dateTo = moment(dateFromTo[1], "YYYY-MM-DD");
      if (
        dateFrom.format("YYYY-MM-DD") !== dateFromTo[0] ||
        dateTo.format("YYYY-MM-DD") !== dateFromTo[1]
      ) {
        throw Error();
      }
      const newHacker = {
        name: names[i],
        dateFrom,
        dateTo,
      };
      newHackers.push(newHacker);
    } catch (e) {
      notAddedHackersNames.push(names[i]);
    }
  }
  console.log({ notAddedHackersNames, newHackers });
  return { notAddedHackersNames, newHackers };
};

export default Bookings;
