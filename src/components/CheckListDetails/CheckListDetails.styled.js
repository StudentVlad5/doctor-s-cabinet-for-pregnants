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

export const TdRed = styled(Td)`
  background-color: ${(props) => props.$props};
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
export const TdSmallRed = styled(TdSmall)`
  background-color: ${(props) => props.$props};
`;

export const TdCheckCorrectItem = styled.td`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 11px 20px;
  height: 75px;
  border: none;
`;

export const AdditionalInfoBox = styled.div``;

export const AdditionalInfoForm = styled.form`
  position: relative;
  margin-top: 42px;
`;

export const AdditionalInfoFormLable = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1022px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const AdditionalInfoFormInput = styled.input`
  padding: 10px 157px 10px 15px;
  width: 100%;
  border-radius: 17px;
  border: 1px solid ${theme.colors.black};
  background-color: ${theme.colors.white};

  color: ${theme.colors.black};
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 20px 257px 20px 25px;
    width: 547px;
  }
`;

export const AdditionalInfoFormText = styled(PatientBoxTitle)`
  font-weight: 400;
  margin-bottom: 10px;

  @media screen and (min-width: 1022px) {
    margin-bottom: 0;
  }
`;

export const AdditionalInfoDataBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  position: relative;

  @media screen and (min-width: 1022px) {
    flex-direction: row;
  }
`;

export const AdditionalInfoDataLableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 1022px) {
    position: absolute;
    right: 0;
    flex-direction: row;
  }
`;

export const AdditionalInfoDataLableBox2 = styled(AdditionalInfoDataLableBox)`
  /* background-color: white;
  border-radius: 5px;
  font-size: 20px; */
`;

export const AdditionalInfoDataLable = styled.label`
  margin-bottom: 20px;
  @media screen and (min-width: 1022px) {
    /* position: absolute; */
    /* right: 300px; */
    margin-bottom: 0;
  }
`;

export const AdditionalInfoDataLable2 = styled.label`
  /* @media screen and (min-width: 1022px) {
    position: absolute;
    right: 0;
  } */
`;

export const AdditionalInfoDataInput = styled(AdditionalInfoFormInput)`
  width: 170px;
  padding: 10px 25px;
  margin-right: 0;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 215px;
    padding: 20px 45px;
  }

  @media screen and (min-width: 1022px) {
    margin-right: 33px;
  }
`;

export const AdditionalInfoDataInput2 = styled(AdditionalInfoFormInput)`
  width: 250px;
  padding: 10px 25px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 300px;
    padding: 20px 45px;
  }
`;

export const AdditionalInfoBtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;

  @media screen and (min-width: 1022px) {
    justify-content: flex-end;
  }
`;

export const AdditionalInfoBtn = styled.button`
  padding: 12px 35px;
  border-radius: 17px;
  border: 1px solid ${theme.colors.black};
  background: ${theme.colors.darkGreen};

  color: ${theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 25px;
  }
  @media screen and (min-width: 1022px) {
    font-size: 32px;
    padding: 18px 85px;
  }

  &:hover,
  &:focus {
    background: ${theme.colors.lightGreen};
  }
`;
export const CheckBoxItem = styled.input`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
`;
export const StylesCheckBoxItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border: ${(props) => props.$props} solid ${theme.colors.black};
  border-radius: 11px;
  background-color: ${theme.colors.white};
  cursor: pointer;
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

export const DecisionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 75px;
`;

export const DecisionBoxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

export const DecisionBoxInput = styled.input`
  position: absolute;
  left: 833px;
  width: 52px;
  height: 52px;
  border-radius: 11px;
  cursor: pointer;
  border-color: #7a7a7a;

  &[type="checkbox"]:checked {
    accent-color: #009b2b;
  }
`;

export const DecisionBoxTextareaLabel = styled.label`
  margin-top: 40px;
`;

export const DecisionBoxTextarea = styled.textarea`
  width: 100%;
  height: 206px;
  border-radius: 11px;
  padding: 25px 27px;

  color: ${theme.colors.black};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const TdCMP = styled.td`
  position: relative;
  padding: 12px 10px 12px 25px;
  border: 1px solid ${theme.colors.black};

  width: 100%;
  height: 279px;

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

export const TdCMPSpan = styled.span`
  position: absolute;
  top: 12px;

  &:last-child {
    top: 70px;
  }
`;

export const DivForLabelDateTime = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin-left: 20px;
`;

// export const DecisionBox = styled.div``;
// export const DecisionBox = styled.div``;
// export const DecisionBox = styled.div``;
// export const DecisionBox = styled.div``;
// export const DecisionBox = styled.div``;
// export const DecisionBox = styled.div``;
// export const DecisionBox = styled.div``;
// export const DecisionBox = styled.div``;
