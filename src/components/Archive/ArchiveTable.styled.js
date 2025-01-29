import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { NavLink } from 'react-router-dom';

const Table = styled.table`
  width: 100%;
  color: ${theme.colors.black};
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: 60px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    table-layout: auto;
  }
`;

const TableFilter = styled.thead`
  & th {
    position: relative;
    padding: 5px 20px 5px 5px;
    background: ${theme.colors.darkGrey};
  }

  & input {
    display: none;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;

    width: 90%;
    margin: 0 auto;
    padding: 5px;

    text-align: start;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.black};

    background: ${theme.colors.white};
    border: 0.5 solid ${theme.colors.darkGrey};
    border-radius: 2px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 12px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 14px;
    }

    &:hover,
    &:focus,
    &:focus-visible {
      border-width: 0.5px;
      border-style: inset;
      border-color: ${theme.colors.black};
    }

    &.active {
      display: inline-block;
    }
  }
`;

const TableRow = styled.tr``;

const TableHead = styled.th`
  max-width: 179px;
  padding: 0;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: ${theme.colors.black};

  background-color: ${theme.colors.white};
  border: 0.5px solid ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const TableData = styled.td`
  padding: 5px;
  min-width: 113px;
  max-width: 182px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: ${theme.colors.black};

  background-color: ${theme.colors.white};
  border: 0.5px solid ${theme.colors.black};

  overflow-x: hidden;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
  gap: 23px;

  float: inline-end;
  margin-top: 20px;
  margin-bottom: 13px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 33px;
  }
`;

const BtnFilter = styled.button`
  position: absolute;
  right: 1px;
  top: 50%;
  transform: translateY(-50%);

  padding: 0;

  color: ${theme.colors.black};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &.active {
    color: ${theme.colors.darkGreen};
  }

  & svg {
    width: 10px;
    height: 10px;
    fill: currentColor;
    /* stroke: currentColor; */

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 18px;
      height: 18px;
    }
  }
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;

  width: 160px;
  height: 40px;
  padding: 0 4px;

  border: none;
  transition: all 0.25s ease-in;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 224px;
    height: 46px;
  }

  &:hover,
  &:focus {
    box-shadow: ${theme.colors.grey} 1px 1px 2px inset;
  }

  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.black};

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 16px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 20px;
    }
  }

  & svg {
    width: 14px;
    height: 14px;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 23px;
      height: 23px;
    }
  }

  & img {
    width: 16px;
    height: 16px;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 28px;
      height: 28px;
    }
  }
`;

const ClearFiltersBtn = styled(Btn)`
  background-color: ${theme.colors.btnBlue};
`;

const DownloadExcel = styled(Btn)`
  background-color: ${theme.colors.lightGreen};
`;

const Link = styled(NavLink)`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.textBlue};
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export {
  Table,
  TableFilter,
  TableRow,
  TableHead,
  TableData,
  BtnWrapper,
  BtnFilter,
  ClearFiltersBtn,
  DownloadExcel,
  Link,
};
