"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(addUser(name));
    console.log(name);
  };

  return (
    <div className="add-user">
      <div className="content-style">
        <h3>Add users</h3>
        <input
          type="text"
          placeholder="Add users"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddUser}>Add user</button>
      </div>
    </div>
  );
};

export default AddUser;
