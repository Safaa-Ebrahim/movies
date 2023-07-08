import React from "react";
import imageContact from "./../assets/images/contactus.jpg";
export default function ContactUs() {
  function contactSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="row">
        <div className="col-12 m-0">
          <img
            src={imageContact}
            alt="contact"
            style={{ width: "100%", borderRadius: "20px", height: "400px" }}
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-8 mx-auto">
          <p>
            If you have any questions, comments, or feedback about our website,
            please don't hesitate to contact us. You can reach us through the
            contact form below, and we will get back to you as soon as possible.
          </p>
          <form onSubmit={contactSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>

  );
}
