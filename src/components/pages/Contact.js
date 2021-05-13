import React, { useState } from 'react';
import axios from 'axios';

import '../../App.scss';

export default function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later',
        });
      });
  };

  const handleChange = event => {
    const { id, value } = event.target;

    setState({
      ...state,
      [id]: value,
    });
  };
  // const handleChange = event => {
  //   const field = event.target.id;
  //   if (field === 'name') {
  //     setName(event.target.value);
  //   } else if (field === 'email') {
  //     setEmail(event.target.value);
  //   } else if (field === 'message') {
  //     setMessage(event.target.value);
  //   }
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setStatus('Sending');
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:5000/contact',
  //     data: useState,
  //   }).then(response => {
  //     if (response.data.status === 'sent') {
  //       alert('Message Sent');
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //       setStatus('Submit');
  //     } else if (response.data.status === 'failed') {
  //       alert('Message Failed');
  //     }
  //   });
  // };

  // const buttonText = { status };

  return (
    <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>

      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <form method="POST" onSubmit={handleSubmit}>
        <h3>Drop Me a Message</h3>
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="form-control"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-control"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="subject"
            className="form-control"
            value={state.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            className="form-control"
            value={state.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btnContact">
            {/* {buttonText} */}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
