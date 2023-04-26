import React, { useState, useEffect, useRef } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { generateId } from "../../utils/utilities";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ contactName, setContactName ] = useState("");
  const [ contactPhone, setContactPhone ] = useState("");
  const [ contactEmail, setContactEmail ] = useState("");
  const [ duplicateAlert, setDuplicateAlert ] = useState("");

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
      id: generateId(),
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    };
    if (duplicateAlert === "black") {
      addContact(newContact);
      setContactName(""); // can I set these all on one line?
      setContactPhone("");
      setContactEmail("");
    } else {
      alert("This is a duplicate entry!");
    }
    inputRef.current.focus();
  };

  useEffect(() => {
    if (contacts.some((contact) => contact.name.toLowerCase() === contactName.toLowerCase())) {
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
        <ContactForm
          handleSubmit={handleSubmit}
          name={contactName}
          setName={handleNameChange}
          phone={contactPhone}
          setPhone={handlePhoneChange}
          email={contactEmail}
          setEmail={handleEmailChange}
          duplicate={duplicateAlert}
          inputRef={inputRef}
        />
        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
          <TileList tiles={contacts} />
          {/* contacts.map((contact) => (
            <TileList
              key={contact.contactId}
              contactName={contact.name}
              contactPhone={contact.phone}
              contactEmail={contact.email}
            />
          )) */}
      </section>
    </div>
  );
};
