import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import _ from "lodash";
import moment from "moment";
import { Box } from "@material-ui/core";

const Bookings = ({ handleMealsSchedule }) => {
  const [hackersNames, setHackersNames] = useState("");
  const [hackersDates, setHackersDates] = useState("");

  const onClickGetMealsScheduleButton = () => {
    const { newHackers, notAddedHackersNames, arrayOFDates } =
      getHackersFromTextFields(hackersNames, hackersDates);
    console.log("newHackers ->", newHackers);
    console.log("notAddedHackersNames ->", notAddedHackersNames);
    console.log("arrayOFDates ->", arrayOFDates);
    handleMealsSchedule(newHackers, notAddedHackersNames, arrayOFDates);
  };

  return (
    <div className="row">
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        variant="outlined"
        placeholder="Enter the hacker list (one hacker per line)"
        onChange={(event) => setHackersNames(event.target.value)}
      />
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        variant="outlined"
        placeholder="Enter the date range for each hacker's stay (one range per line)"
        onChange={(event) => setHackersDates(event.target.value)}
      />
      <Box />
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
  console.log("first => ", nameTextField, dateTextField);
  const names = _.split(nameTextField, /\r?\n/);
  const dates = _.split(dateTextField, /\r?\n/);

  // console.log("second => ", names, dates);

  const newHackers = [];
  const notAddedHackersNames = [];
  const arrayOFDates = [];

  for (let i = 0; i < names.length; i++) {
    try {
      const dateFromTo = dates[i].split("to");
      const dateFrom = moment(dateFromTo[0]).format("YYYY-MM-DD");
      const dateTo = moment(dateFromTo[1]).format("YYYY-MM-DD");

      // console.log("third => ", dateFrom, dateTo);

      if (dateFrom !== dateFromTo[0] || dateTo !== dateFromTo[1]) {
        throw Error();
      }

      var dateFirst = new Date(dateFrom);
      var dateSecond = new Date(dateTo);

      // time difference
      var timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime());

      // days difference
      var numberOfDays = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1;

      for (let j = 0; j < numberOfDays; j++) {
        var d = new Date(dateFirst),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        let temp = [year, month, day].join("-"); // return [year, month, day].join('-');
        arrayOFDates.push({ date: temp, name: names[i] });
        dateFirst.setDate(dateFirst.getDate() + 1);
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
  return { notAddedHackersNames, newHackers, arrayOFDates };
};

export default Bookings;
