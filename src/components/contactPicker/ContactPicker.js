import React from "react";

export const ContactPicker = ({onChange, contacts, value}) => {

  return (
    
    <select name="contacts" id="contacts" onChange={onChange} >
      <option value="">No contact selected</option>
      {contacts.map(({name}) => (
        <option value={name}>{name}</option>
      ))}
    </select>
    
  );
};
