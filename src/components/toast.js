// react-bootstrap
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

const ToastInfo = ({ msg, show, onDismissToast }) => {
    console.log("msg:", msg);
    console.log("show:", show);
  return (
    <ToastContainer
      className="p-3"
      containerPosition="fixed"
      position="middle-center"
    >
      <Toast
        bg="light"
        onClose={onDismissToast}
        show={show}
        delay={6000}
        autohide
      >
        <Toast.Header className="justify-content-end bg-primary">
          <strong className="me-auto">Movies</strong>
        </Toast.Header>
        <Toast.Body className="text-dark">{msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastInfo;