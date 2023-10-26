import React, { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { loginUser } from "./loginUser.js";
//import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onsubmitHandler = (event) => {
    event.preventDefault();

    console.log("Id", Id);
    console.log("Password", Password);

    let body = {
      id: Id,
      password: Password,
    };

    dispatch(loginUser(body));
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={onsubmitHandler}
    >
      <label>Email</label>
      <input type="Id" value={Id} onChange={onIdHandler} />
      <label>Password</label>
      <input type="password" value={Password} onChange={onPasswordHandler} />
      <br />
      <button formAction="">로그인</button>
    </form>
  );
}
export default Login;
