import React, { useState, useEffect, useRef } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { generateId } from "../../utils/utilities";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [duplicateAlert, setDuplicateAlert] = useState("");

  const { contacts, addContact } = props;

  /* We haven't covered refs, but I found this and adding it to focus the name input after submit */
  const inputRef = useRef(null);

  const handleNameChange = (e) => {
    setContactName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setContactPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      contactId: generateId(),
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    };
    addContact(newContact);
    setContactName(""); // can I set these all on one line?
    setContactPhone("");
    setContactEmail("");
    inputRef.current.focus();
  };

  useEffect(() => {
    if (contacts.some((contact) => contact.name === contactName)) {
      setDuplicateAlert("red");
    } else {
      setDuplicateAlert("black");
    }
  }, [contactName, contacts]);

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
            style={{ color: duplicateAlert }}
            ref={inputRef}
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
