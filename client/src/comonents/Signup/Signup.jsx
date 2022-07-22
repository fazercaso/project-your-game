import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@geist-ui/core";

import { setUserAC } from '../../redux/actionCreators/userAC';

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const PAGE_TITLE   = 'Регистрация';
  const BUTTON_TITLE = 'Зарегистрироваться';
  const FORM_ACTION  = 'http://localhost:4000/sign/up';
  const FORM_METHOD  = 'POST';

  const sendFormData = (event) => {
    event.preventDefault();

    const body = {
      email: event.target.email.value,
      name: event.target.name.value,
      password: [
        event.target.password.value,
        event.target.password_confirm.value,
      ],
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
      <Input name="email" htmlType="text" label="E-mail" placeholder="E-mail" />
      <Input name="name"  htmlType="text" label="Name"   placeholder="Name" />
      <Input name="password" htmlType="password" label="Password" placeholder="Password" />
      <Input name="password_confirm" htmlType="password" label="Confirm password"  placeholder="Confirm password" />
      <Button auto htmlType="submit" scale={1/3}>{BUTTON_TITLE}</Button>
    </form>
  );
};
