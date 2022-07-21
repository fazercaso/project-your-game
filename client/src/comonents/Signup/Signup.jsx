/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('../Layout');

module.exports = function Signup({ errors }) {
  // const PAGE_TITLE   = 'Регистрация';
  // const BUTTON_TITLE = 'Зарегистрироваться';
  // const FORM_ACTION  = 'http://localhost:4000/sign/up';
  // const FORM_METHOD  = 'POST';

  return (
    <form onSubmit={sendFormData}>
      <Input name="email" type="text" label="E-mail" placeholder="E-mail" />
      <Input name="name"  type="text" label="Name"   placeholder="Name" />
      <Input name="password[0]" type="password" label="Password" placeholder="Password" />
      <Input name="password[1]" type="password" label="Confirm"  placeholder="Confirm" />
      <Button auto type="submit" scale={1/3}>{BUTTON_TITLE}</Button>
    </form>
  );
};
