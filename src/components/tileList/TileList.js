import React from "react";

export const TileList = (props) => {
  const { contactName, contactPhone, contactEmail } = props;
  return (
    <div style={{marginBottom:'1rem'}}>
      {contactName}<br />{contactPhone}<br />{contactEmail}
    </div>
  );
};
