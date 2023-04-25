import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicate,
  inputRef
}) => {
  return (
    <><form className="AddContactForm" onSubmit={handleSubmit}>
    <input
      value={name}
      onChange={setName}
      type="text"
      aria-label="Contact name"
      placeholder="Name"
      style={{ color: duplicate }}
      ref={inputRef}
    />
    <input
      value={phone}
      onChange={setPhone}
      type="tel"
      pattern="[(]?[0-9]{3}[-)]?\s[0-9]{3}[-]?\s[0-9]{4}"
      aria-label="Contact phone number"
      placeholder="Phone - 126-456-7890"
    />
    <input
      value={email}
      onChange={setEmail}
      type="email"
      aria-label="Contact email address"
      placeholder="Email"
    />
    <input type="submit" value="Add Contact" />
  </form></>
  );
};

