// components
import ContactUsForm from "../components/ContactUsForm";
import imageContact from "./../assets/images/contactus.jpg";

export default function ContactUs() {
  
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

          <ContactUsForm />
        </div>
      </div>
    </>
  );
}
