import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  inputRef,
}) => {
  return (
    <>
      <form className="AddAppointmentForm" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={setTitle}
          type="text"
          aria-label="Appointment Title"
          placeholder="Appointment Title"
          ref={inputRef}
        />
        <ContactPicker contacts={contacts} onChange={setContact} value={contact} />
        <input
          value={date}
          onChange={setDate}
          type="date"
          aria-label="Appointment date"
          min={getTodayString()}
        />
        <input
          value={time}
          onChange={setTime}
          type="time"
          aria-label="Appointment time"
          placeholder="Time"
        />
        <input type="submit" value="Add Appointment" />
      </form>
    </>
  );
};
