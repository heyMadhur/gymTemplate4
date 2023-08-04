"use client";
import React, { useState, ChangeEvent } from "react";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let n, value;
  // event: ChangeEvent<HTMLInputElement>
  // event: React.ChangeEventHandler<HTMLTextAreaElement
  const postData = (event: any) => {
    n = event.target.name;
    value = event.target.value;

    setData({ ...data, [n]: value });
  };

  return (
    <>
      <div id="contact">
        <hr />

        <h1 className="heading-ContactUs">Contact Us</h1>
        <form className="form-container border border-solid border-brand" method="POST">
          <h1>Get in touch</h1>
          <div className="name block">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="given-name"
              required
              value={data.name}
              onChange={postData}
            />
          </div>
          <div className="email block">
            <label htmlFor="frm-email">Email</label>
            <input
              id="frm-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={postData}
            />
          </div>
          <div className="block phone">
            <label htmlFor="frm-phone">Phone</label>
            <input
              id="frm-phone"
              type="text"
              name="phone"
              autoComplete="tel"
              required
              value={data.phone}
              onChange={postData}
            />
          </div>

          <div className="message block">
            <label htmlFor="frm-message">Message</label>
            <textarea
              value={data.message}
              onChange={postData}
              id="frm-message"
              rows={6}
              name="message"
            ></textarea>
          </div>
          <div className="button block">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="col-lg-4">
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <h4>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.470460364372!2d77.2816607185455!3d28.661487582772143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda6823f207f%3A0x97e534d85a6cb064!2sFitness%20Place%20Gym!5e0!3m2!1sen!2sin!4v1686561115056!5m2!1sen!2sin"
                width="100%"
                height="600px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112008.36030984098!2d77.2571136!3d28.6818304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1690911798575!5m2!1sen!2sin"
                width="100%"
                height="600px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
