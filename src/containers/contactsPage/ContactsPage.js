import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const { contacts, addContact } = props;
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleNameChange = (e) => {
    let newName = e.target.value;
    /* if (contacts.find(newName)) {
      console.log("Name is a duplicate");
    } */
    setContactName(newName);
  };

  const handlePhoneChange = (e) => {
    setContactPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  let nextId = 3;
  function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to contacts list
    const newContact = {
      contactId: generateId(),
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    };
    addContact(newContact);
    setContactName(""); // can I set all on one line?
    setContactPhone("");
    setContactEmail("");
  };
  /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm />
        {/* I think add <ContactForm /> instead of form here */}
        <form className="AddContactForm" onSubmit={handleSubmit}>
          <input
            value={contactName}
            onChange={handleNameChange}
            type="text"
            aria-label="Your name"
            placeholder="Your name"
          />
          <input
            value={contactPhone}
            onChange={handlePhoneChange}
            type="tel"
            aria-label="Your phone number"
            placeholder="Your phone number"
          />
          <input
            value={contactEmail}
            onChange={handleEmailChange}
            type="email"
            aria-label="Your email"
            placeholder="Your email"
          />
          <input type="submit" value="Add Contact" />
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <TileList
              key={contact.contactId}
              contactName={contact.name}
              contactPhone={contact.phone}
              contactEmail={contact.email}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
