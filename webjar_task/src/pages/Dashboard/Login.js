import React, { useState, useRef } from "react";
import style from "../Dashboard/style/login.module.css";
import axios from "axios";


function Login() {
  const usernameRef = useRef(null);
  const userPassRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      userPass: userPassRef.current.value,
    };
    axios
      .post("https://challenge.webjar.ir/auth/login", {
        userName: data.username,
        password: data.userPass,
      })

      .then((response) => {
        console.log(response);
        if(response.status == 200){
            alert('لاگین با موفقیت انجام شد')
        }
        else{
            alert('مقادبر را به درستی وارد کنید')
        }
        data.username = null;
        data.userPass = null;
      })

      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <header className={style.headerLogin}>
        <p>ورود به حساب کاربری</p>
      </header>
      <div className={style.inputBox}>
        <label>نام کاربری</label>
        <input
          ref={usernameRef}
          type="text"
          placeholder="نام کاریری خود را وارد کنید"
        />
        <label>رمز عبور</label>
        <input
          ref={userPassRef}
          type="password"
          placeholder=" رمز عبور خود را وارد کنید"
        />
      </div>
      <div className={style.btnBox}>
        <button type="submit">ورود</button>
      </div>
    </form>
  );
}

export default Login;
