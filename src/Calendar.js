import React, { useEffect } from "react";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "./Calendar.css";

const Calendar = ({ dateString }) => {
  dayjs.extend(localeData);
  const formatDate = dayjs(dateString).format("DD/MM/YYYY");
  const dateObject = dayjs(dateString);
  const year = dateObject.year();
  const month = dateObject.format("MMMM");
  const day = dateObject.format("D");
  const firstDayOfMonth = dateObject.startOf("month").format("d");
  const daysInMonth = dateObject.daysInMonth();

  // JSX
  const weekdayNames = dayjs.weekdaysShort().map((day) => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  const notInMonthDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    notInMonthDays.push(<td>{""}</td>);
  }

  const dateCells = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentDay = i == day ? "today" : "";
    dateCells.push(<td className={`calendar-day ${isCurrentDay}`}>{i}</td>);
  }

  const allCells = [...notInMonthDays, ...dateCells];
  const rows = [];
  let cells = [];

  allCells.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === allCells.length - 1) {
      rows.push(cells);
    }
  });

  const daysRows = rows.map((d, i) => <tr key={i}>{d}</tr>);

  return (
    <div className="calendar">
      <div className="header">
        <span>{month}</span>
        <span>{year}</span>
      </div>
      <div>
        <table>
          <thead>
            <tr>{weekdayNames}</tr>
          </thead>
          <tbody>{daysRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
