import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  background-color: #f9f9f9;
  border-radius: 7px;
  padding: 20px 30px;
  width: 300px;
`;

export const LogoContainer = styled.div`
  padding-bottom: 20px;
`;

export const LoginLogo = styled.img`
  width: 150px;
`;

export const FormContainer = styled.form``;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 3%;
  text-align: start;
`;

export const InputField = styled.input`
  height: 30px;
  border-radius: 3px;
  border-style: none;
  border: solid 1px black;
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  align-self: center;
  gap: 10px;
  text-align: start;
`;

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`;

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border-style: none;
  border-radius: 3px;
  color: white;
  padding: 10px;
  width: 250px;
  margin-top: 10px;
`;

export const ErrPara = styled.p`
  color: red;
`;
