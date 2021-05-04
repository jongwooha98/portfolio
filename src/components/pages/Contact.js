import React from 'react';
import '../../App.scss';
import { Button } from '../Button.js';

export default function Contact() {
  return (
    <h1 className="contact">
      <div className="section footer-subscription">
        <p className="footer-subscription-heading">Contact me via email</p>
        <p className="footer-subscription-text">Email text placeholder</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <textarea>Enter your message</textarea>

            <Button buttonStyle="btn--outline">Send</Button>
          </form>
        </div>
      </div>
    </h1>
  );
}
