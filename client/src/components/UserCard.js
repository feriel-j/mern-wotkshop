import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userDel } from "../JS/userSlice/userSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Updateuser from "./Updateuser";

const UserCard = ({ user, ping, setping }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.url} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.age}</Card.Text>
          <ul>
            {user.favFood.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </Card.Body>
        <button
          onClick={() => {
            dispatch(userDel(user._id));
            Swal.fire("Good job!", "user deleted!", "success");
            setping(!ping);
          }}
        >
          delete
        </button>
        <Updateuser ping={ping} setping={setping} userId={user._id} />
      </Card>
    </div>
  );
};

export default UserCard;
