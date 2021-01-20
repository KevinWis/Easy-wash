import { render, screen,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../pages/login";
import axios from "axios";
import "@testing-library/jest-dom";

import { BrowserRouter } from "react-router-dom";


describe("Login", () => {
  test("email field should have label", async () => {
    const {getByLabelText} = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>    
    );    
    const emailInputNode = getByLabelText('Email');
    expect(emailInputNode.getAttribute("name")).toBe("email");
});
test("email input should accept text", async () => {
  const {getByLabelText} = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>    
  );    
  const emailInputNode = getByLabelText('Email');
  expect (emailInputNode.value).toMatch("");
  fireEvent.change(emailInputNode,{target:{value:'testando'}})
  expect (emailInputNode.value).toMatch("testando");
});

test("Passord field should have label", async () => {
  const {getByLabelText} = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>    
  );    
  const passwordInputNode = getByLabelText('Senha');
  expect(passwordInputNode.getAttribute("name")).toBe("password");
});
test("Password input should accept", async () => {
  const {getByLabelText} = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>    
  );    
  const passwordInputNode = getByLabelText('Senha');
  expect (passwordInputNode.value).toMatch("");
  fireEvent.change(passwordInputNode,{target:{value:'testando'}})
  expect (passwordInputNode.value).toMatch("testando");
});
})
