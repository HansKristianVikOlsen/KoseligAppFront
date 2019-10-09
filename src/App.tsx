import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { SendMail } from "./SendMail";

import { toast } from "react-toastify";

function App() {
  const [mail, setMail] = useState("");
  const [mailSent, setMailSent] = useState(false);
  function onClickBtn(event) {
    event.preventDefault();
    SendMail(mail);
    setMailSent(true);
  }
  function handleChange(event) {
    setMail(event.target.value);
  }

  return (
    <div>
      <h1>Skriv mail</h1>
      <label htmlFor="mailLabel">
        <strong>Mail: </strong>
      </label>
      <input id="mailLabel" onChange={handleChange}></input>
      <button className="btn btn-primary" onClick={onClickBtn}>
        Få koselig melding!
      </button>
      {mailSent
        ? toast.success("Koselig Melding sendt :P!! (Evt Sjekk spam)") &&
          setMailSent(false)
        : ""}

      <div></div>
    </div>
  );
}

export default App;
