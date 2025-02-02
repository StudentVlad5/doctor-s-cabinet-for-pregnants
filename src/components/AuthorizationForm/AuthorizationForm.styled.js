import styled from "styled-components";
import { theme } from "components/baseStyles/Variables.styled";
import { Container } from "components/baseStyles/CommonStyle.styled";

const AuthorizationSection = styled.section`
  display: flex;
  width: 100%;
`;

const AuthorizationContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  padding: 10px;
`;
const AuthorizationFormItem = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Titleline = styled.label`
  color: ${theme.colors.black};
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 32px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 40px;
  }
`;
const Input = styled.input`
  display: flex;
  justify-content: center;
  align-self: center;
  min-height: 45px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 8px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 6px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.black};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 432px;
    min-height: 65px;
    font-size: 28px;
    margin-top: 60px;
    margin-bottom: 80px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    min-width: 632px;
    min-height: 65px;
    font-size: 32px;
    margin-top: 77px;
    margin-bottom: 118px;
  }
  &::placeholder {
    text-align: center;
    color: ${theme.colors.grey};
  }
`;
const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  min-width: 150px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 6px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGreen};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 432px;
    min-height: 65px;
    font-size: 28px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    min-width: 632px;
    min-height: 65px;
    font-size: 32px;
  }
`;

export {
  AuthorizationSection,
  AuthorizationContainer,
  AuthorizationFormItem,
  Titleline,
  Input,
  ButtonSubmit,
};
