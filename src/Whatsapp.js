import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <FloatingWhatsApp
        phoneNumber="0528200435"
        accountName="הניה"
        allowEsc
        allowClickAway
        chatMessage={"תודה על פנייתך"}
        notificationSound
      />
    </div>
  );
};

export default Whatsapp;
