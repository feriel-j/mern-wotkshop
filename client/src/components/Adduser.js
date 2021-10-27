import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdd } from "../JS/userSlice/userSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Adduser = ({ ping, setping }) => {
  const [show, setShow] = useState(false);
  const [favF, setfavF] = useState([]);
  const dispatch = useDispatch();

  const [food, setfood] = useState("");
  const [user, setuser] = useState({
    name: "",
    age: "",
    favFood: [],
    url: "",
  });

  const foodAdd = () => {
    setfavF([...favF, food]);
    setuser({ ...user, favFood: favF });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    dispatch(userAdd(user));
    Swal.fire("Good job!", "user added!", "success");
    setping(!ping);
  };
  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        Add user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-form">
          <input
            type="text"
            placeholder="enter user name"
            onChange={(e) => {
              setuser({ ...user, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="enter user image"
            onChange={(e) => {
              setuser({ ...user, url: e.target.value });
            }}
          />

          <input
            type="text"
            placeholder="enter user age"
            onChange={(e) => {
              setuser({ ...user, age: e.target.value });
            }}
          />
          <div className="food">
            <input
              type="text"
              placeholder="enter user favorite food"
              onChange={(e) => setfood(e.target.value)}
            />
            <button onClick={foodAdd}>add food</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="light"
            onClick={() => {
              handleClose();
              handleAdd();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Adduser;
