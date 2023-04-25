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
      aria-label="Your name"
      placeholder="Your name"
      style={{ color: duplicate }}
      ref={inputRef}
    />
    <input
      value={phone}
      onChange={setPhone}
      type="tel"
      aria-label="Your phone number"
      placeholder="Your phone number"
    />
    <input
      value={email}
      onChange={setEmail}
      type="email"
      aria-label="Your email"
      placeholder="Your email"
    />
    <input type="submit" value="Add Contact" />
  </form></>
  );
};

