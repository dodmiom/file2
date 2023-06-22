import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
    const {handlesubmit,list,setlist,activ,setactiv }=props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='container '>
      <button  className='btn btn-dark' style={{position:"absolute",fontSize:"40px",fontWeight:"bold",color:"white",border:"none",borderRadius:"30px",width:"80px"}} onClick={handleShow}>
        +
      </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Todo List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write Here..</Form.Label>
              <Form.Control value={activ} onChange={(e)=>{setactiv(e.target.value)}}
                type="text"
                placeholder="Add Task"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger'  onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-success' onClick={handlesubmit }>
            Add Task
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;