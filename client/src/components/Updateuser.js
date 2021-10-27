import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userUpdt } from "../JS/userSlice/userSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Updateuser = ({ userId, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updated, setupdated] = useState({
    name: "",
    age: "",
    url: "",
  });

  const handleEdit = () => {
    dispatch(userUpdt({ id: userId, updated }));
    setping(!ping);
    console.log(updated);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Modal.Body className="add-form">
            <input
              type="text"
              placeholder="enter user name"
              onChange={(e) => {
                setupdated({ ...updated, name: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="enter user image"
              onChange={(e) => {
                setupdated({ ...updated, url: e.target.value });
              }}
            />

            <input
              type="text"
              placeholder="enter user age"
              onChange={(e) => {
                setupdated({ ...updated, age: e.target.value });
              }}
            />
            <div className="food">
              <input type="text" placeholder="enter user favorite food" />
            </div>
          </Modal.Body>
          !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
              handleClose();
              Swal.fire("Good job!", "user deleted!", "success");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Updateuser;
