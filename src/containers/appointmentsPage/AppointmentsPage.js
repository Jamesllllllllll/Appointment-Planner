import React, { useState, useRef } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { appointments, contacts, addAppointment } = props;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      name: title,
      contact: contact,
      date: date,
      time: time,
    };
    addAppointment(newAppointment);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
    /*
    Add contact info and clear data  
    */
    inputRef.current.focus();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
            handleSubmit={handleSubmit}
            title={title}
            setTitle={handleTitleChange}
            contact={contact} 
            setContact={handleContactChange}
            date={date} 
            setDate={handleDateChange}
            time={time} 
            setTime={handleTimeChange}
            inputRef={inputRef}
            contacts={contacts}
            />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList tiles={appointments} />
      </section>
    </div>
  );
};
