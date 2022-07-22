import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@geist-ui/core";

import { setUserAC } from '../../redux/actionCreators/userAC';

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const PAGE_TITLE   = 'Авторизация';
  const BUTTON_TITLE = 'Авторизоваться';
  const FORM_ACTION  = 'http://localhost:4000/sign/in';
  const FORM_METHOD  = 'POST';

  const sendFormData = async (event) => {
    event.preventDefault();

    const body = {
      email: event.target.email.value,
      password: event.target.password.value
    };

    fetch(FORM_ACTION, {
      method: FORM_METHOD,
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(body)
    }).then(
      response => response.json()
    ).then(
      data => dispatch(setUserAC(data))
    );

    navigate('/profile');
  };

  return (
    <form onSubmit={sendFormData}>
      <Input name="email"    htmlType="text"     label="E-mail"   placeholder="E-mail" />
      <Input name="password" htmlType="password" label="Password" placeholder="Password" />
      <Button auto htmlType="submit" scale={1/3}>{BUTTON_TITLE}</Button>
    </form>
  );
};
