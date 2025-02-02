import { theme } from "components/baseStyles/Variables.styled";
import styled from "styled-components";
import { ReactComponent as copyIcon } from "images/svg/copy.svg";
import { ReactComponent as wordIcon } from "images/svg/word.svg";
import { ReactComponent as closeIcon } from "images/svg/close.svg";
import { ReactComponent as checkIcon } from "images/svg/check.svg";
import { Link } from "react-router-dom";

export const CheckListBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 55px;

  @media screen and (min-width: 1022px) {
    justify-content: space-between;
  }

  &::before {
    content: "";
    position: absolute;
    border-bottom: 3px solid ${theme.colors.black};
    bottom: 50px;
    left: 0;
    width: 100%;
  }
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 26px;
`;

export const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  height: 39px;
  width: 200px;
  background-color: #4472c4;
  text-decoration: none;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 59px;
    width: 296px;
  }
`;

export const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: -15px;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 19.5px solid transparent;
  border-right: 15px solid #4472c4;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    left: -20px;
    border-top: 30px solid transparent;
    border-bottom: 29.5px solid transparent;
    border-right: 20px solid #4472c4;
  }
`;

export const CheckListTextBack = styled.p`
  color: ${theme.colors.white};
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 40px;
  }
`;

export const CheckListText = styled.p`
  color: ${theme.colors.black};
  /* font-family: Inter; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CheckListBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (min-width: 1022px) {
    margin-top: 0;
  }
`;

export const CheckListBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 17px;
  padding: 7px 9px 7px 12px;
  border-color: transparent;
  background: ${theme.colors.darkGreen};

  color: ${theme.colors.white};
  text-align: left;
  font-style: normal;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 18px;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 26px;
  }

  @media screen and (min-width: 1022px) {
    font-size: 36px;
    padding: 11px 13px 11px 22px;
  }

  &:hover,
  &:focus {
    background: ${theme.colors.lightGreen};
  }

  &:last-child {
    margin-bottom: 0;
    background-color: #00519b;
    &:hover,
    &:focus {
      background: ${theme.colors.darkBlue};
    }
  }
`;

export const CopyIcon = styled(copyIcon)`
  margin-right: 20px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-right: 36px;
  }
`;

export const WordIcon = styled(wordIcon)`
  margin-right: 20px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-right: 36px;
  }
`;

export const PatientBox = styled.div``;

export const PatientBoxTitle = styled.h2`
  color: ${theme.colors.black};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;

  &:not(:last-child) {
    margin-bottom: 100px;
  }
`;

export const Tr = styled.tr`
  /* border: 1px solid ${theme.colors.black}; */
  /* background-color: ${theme.colors.darkGrey}; */
`;

export const Td = styled.td`
  border-right: 1px solid ${theme.colors.black};
  padding: 12px 10px 12px 25px;
  border: 1px solid ${theme.colors.black};

  width: 700px;
  height: 75px;

  color: ${theme.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: ${theme.colors.darkGrey};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 24px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;

export const TdSmall = styled.td`
  border: 1px solid ${theme.colors.black};
  padding: 12px 10px 12px 25px;
  height: 75px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 24px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;

export const CheckIcon = styled(checkIcon)`
  /* fill: red; */
  width: 36px;
  height: 36px;
  opacity: ${(props) => props.$props};
  fill: ${(props) => props.$fill};
  user-select: none;
  stroke: ${(props) => props.$fill};
`;
export const CloseIcon = styled(closeIcon)`
  /* fill: red; */
  width: 36px;
  height: 36px;
  opacity: ${(props) => props.$props};
  fill: ${(props) => props.$fill};
  user-select: none;
  stroke: ${(props) => props.$fill};
`;

