import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const ContactPage = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_kpb9xr5";
    const templateId = "template_mz6dft9";
    const userId = "zEMXGLKAka9c3Mivc";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setSubmissionStatus("success");
      })
      .catch((error) => {
        console.error("Error sending email:", error);

        setSubmissionStatus("error");
      });
  };

  return (
    <><div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
    <div className="confirmation-message">
        {submissionStatus === "success" && (
          <p className="success-message">Email sent successfully!</p>
        )}
        {submissionStatus === "error" && (
          <p className="error-message">
            Error sending email. Please try again.
          </p>
        )}
      </div></>
  );
  
};

export default ContactPage;
