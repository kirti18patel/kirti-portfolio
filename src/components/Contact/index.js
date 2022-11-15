import React, { useContext, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import Snackbar from '@mui/material/Snackbar';
import { Alert } from "@mui/material";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [message, setMessage] = useState("")
  const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(formState.Name !== "" || formState.Email !== "", formState.Message !== ""){
      fetch(`https://formsubmit.co/ajax/${process.env.REACT_APP_FORM_SUBMIT}`, {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      body: JSON.stringify({
          Name: formState.Name,
          Email: formState.Email,
          Message: formState.Message
        })
      })
      .then(response => response.json())
      .then(response => {
        if(response.success){
          setFormState({ Name: '', Email: '', Message: '' })
          setMessage("Message sent successfully!")
        }
        else {
          setMessage("Message failed!")
        }
        setOpen(true);
      })
      .catch(error => console.log(error));
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = ()=> {
    setOpen(false);
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <span>I am interested in web development opportunities. If you have any question or want to discuss more about, don't hesitate to reach me.</span>
          <div
            className="o-blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form action={`https://formsubmit.co/${process.env.REACT_APP_FORM_SUBMIT}`} method="POST" onSubmit={handleFormSubmit}>
          <input
            name="Name" 
            className="user"  
            placeholder="Name" 
            value={formState.Name}
            default={formState.Name}
            required
            onChange={handleChange}
            style={{background: darkMode?'black': ''}}/>
          <input 
            type="email" 
            name="Email" 
            className="user" 
            placeholder="Email" 
            value={formState.Email} 
            default={formState.Email}
            required 
            onChange={handleChange}
            style={{background: darkMode?'black': ''}}/>
          <textarea 
            name="Message" 
            className="user" 
            placeholder="Message" 
            value={formState.Message} 
            default={formState.Message}
            required 
            onChange={handleChange}
            style={{background: darkMode?'black': ''}}/>
          <input 
            type="submit" 
            value="Send" 
            className="button"/>
          <div
            className="o-blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
