import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const UserList = ({ ping, setping }) => {
  const users = useSelector((state) => state.user.user);

  return (
    <div className="users">
      {users ? (
        users.map((el) => <UserCard user={el} ping={ping} setping={setping} />)
      ) : (
        <img
          src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large?v=v2&px=999"
          alt=""
        />
      )}
    </div>
  );
};

export default UserList;
