import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const { appointments, contacts, addAppointment } = props;
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <TileList
              key={appointment.appointmentId}
              appointmentName={appointment.name}
              appointmentDate={appointment.date}
              appointmentTime={appointment.time}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
