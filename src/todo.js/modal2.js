import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example2(props) {
    const {onClick} =props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-danger'  onClick={handleShow}>
        Delete
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Todo List</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hey Are You Sure You Wanna Delete It?</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-dark" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onClick}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example2;