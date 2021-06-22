import axios from 'axios';
import React, { useState } from 'react';
// import codesandbox from '../../../assets/images/codesandbox.png';
import './_contact.scss';

function Contact() {
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
    <div className="contact-section container-fluid">
      <div className="contact__email">
        <form className="contact-form" method="POST" onSubmit={handleSubmit}>
          <div className="contact-image">
            <i className="fas fa-rocket" />
          </div>
          <h3>Getting in touch is easy!</h3>
          <h4>
            <br />
            Fill out the form below and let&apos;s make amazing things happen!
          </h4>
          <p>
            Contact form is currently not working. <br />
            Please contact me through social media or send me an email at
            jongwooha1@gmail.com
          </p>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                className="form-control"
                value={state.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                className="form-control"
                value={state.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="subject">
              Subject
              <input
                id="subject"
                className="form-control"
                value={state.subject}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                className="form-control"
                value={state.message}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              {/* {buttonText} */}
              Submit
            </button>
          </div>
          <div>
            {result && (
              <p className={`${result.success ? 'success' : 'error'}`}>
                {result.message}
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="contact__social-media">
        <ul className="social-icons">
          <li>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/jongwooha"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              className="social-icon-link github"
              href="https://github.com/jongwooha98"
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          {/* <li>
            <a
              className="social-icon-link codepen"
              href="https://codepen.io/jongwooha98"
              rel="noreferrer"
              target="_blank"
              aria-label="CodePen"
            >
              <i className="fab fa-codepen" />
            </a>
          </li>
          <li>
            <a
              className="social-icon-link codesandbox"
              href="https://codesandbox.io/dashboard/all/?workspace=aa3e9311-a523-43ce-9b87-6980fc77748a"
              rel="noreferrer"
              target="_blank"
              aria-label="CodeSandbox"
            >
              <i>
                <img src={codesandbox} alt="codesandbox" />
              </i>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
