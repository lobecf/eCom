import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <P>Don't have an account? &nbsp; </P>
            <Button onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <P>
            Already have an account? &nbsp;</P>
            <Button onClick={() => setShowLogin(true)}>
              Log In
            </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: auto;
  padding-bottom: 40px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

const P = styled.p`
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  border: none;
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
    text-align: center;
    margin: auto;
    font-family: 'Quicksand', sans-serif;
    width: 300px;
    color: white;
    background: black;
    display: inline-block
    position: relative;
    border-radius: 20px;
    &:hover {
      color: #99FFFF;
      transition: all 0.4s ease 0s;
    }
`;

export default Login;
