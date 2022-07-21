/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('../Layout');

module.exports = function Signin() {
  // const PAGE_TITLE   = 'Авторизация';
  // const BUTTON_TITLE = 'Авторизоваться';
  // const FORM_ACTION  = 'http://localhost:4000/sign/in';
  // const FORM_METHOD  = 'POST';

  return (
    <form onSubmit={sendFormData}>
      <Input name="email"    type="text"     label="E-mail"   placeholder="E-mail" />
      <Input name="password" type="password" label="Password" placeholder="Password" />
      <Button auto type="submit" scale={1/3}>{BUTTON_TITLE}</Button>
    </form>
  );
};
