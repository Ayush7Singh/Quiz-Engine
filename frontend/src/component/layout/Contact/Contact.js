import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: ayushsingh.singh999@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
