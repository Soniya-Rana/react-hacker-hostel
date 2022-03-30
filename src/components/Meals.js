import React from "react";
import moment from "moment";
import _ from "lodash";

const Meals = ({ hackers }) => {
  const hackersOnDay = {};
  _.each(hackers, (hacker) => {
    for (
      let m = moment(hacker.dateFrom, "YYYY-MM-DD");
      !moment(hacker.dateTo, "YYYY-MM-DD").isBefore(m);
      m.add(1, "days")
    ) {
      const day = m.format("YYYY-MM-DD");
      hackersOnDay[day] = hackersOnDay[day] ? hackersOnDay[day] : [];
      hackersOnDay[day] = hackersOnDay[day].concat(hacker);
    }
  });

  return (
    <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
      <ol id="list">
        (
        {_.map(_.keysIn(hackersOnDay), (day) => {
          const breakfast = _.map(hackersOnDay[day], ({ name }) => (
            <li className="morning">
              Breakfast for {name} on {day}
            </li>
          ));
          const lunch = _.map(hackersOnDay[day], ({ name }) => (
            <li className="afternoon">
              Lunch for {name} on {day}
            </li>
          ));
          const dinner = _.map(hackersOnDay[day], ({ name }) => (
            <li className="night">
              Dinner for {name} on {day}
            </li>
          ));

          return (
            <div>
              {breakfast}
              {lunch}
              {dinner}
            </div>
          );
        })}
      </ol>
    </div>
  );
};
export default Meals;
