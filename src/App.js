import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [ contacts, setContacts ] = useState([
    {
      name: 'Joe Schmoe',
      phone: '416-580-9955',
      email: 'joe.schmoe@gmail.com',
    },
    {
      name: 'Aoife Weefy',
      phone: '416-670-4478',
      email: 'eefy@gmail.com',
    }
  ]);

  const addContact = (contactInfo) => {
    setContacts((prev) => [...prev, contactInfo])
  }

  const addAppointment = (appointmentInfo) => {
    setAppointments((prev) => [...prev, appointmentInfo])
  }

  const [ appointments, setAppointments ] = useState([
    {
      name: 'Lunch Meeting',
      contact: 'Joe Schmoe',
      date: 'May 1st, 2023',
      time: '11am',

    }
  ])
  /*
  Define state variables for 
  contacts and appointments 
  */

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
