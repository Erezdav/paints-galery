import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <FloatingWhatsApp
        phoneNumber="0524218441"
        accountName="erez"
        allowEsc
        allowClickAway
        chatMessage={"תודה על פנייתך.ניתן לשוחח גם בטלפון מספר 0524-58522222"}
        notificationSound
      />
    </div>
  );
};

export default Whatsapp;
