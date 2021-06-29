import React from 'react';
import './_contact.scss';

function Contact() {
  return (
    <div className="contact-section container-fluid">
      <div className="contact__email">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
        >
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
                name="name"
                type="text"
                id="name"
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                name="email"
                type="email"
                id="email"
                className="form-control"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="subject">
              Subject
              <input
                name="subject"
                id="subject"
                className="form-control"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message
              <textarea
                name="message"
                id="message"
                className="form-control"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
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
