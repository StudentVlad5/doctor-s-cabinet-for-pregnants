import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';

const HeaderSection = styled.header`
  width: 100%;
  margin: 0 auto;
  background: ${theme.colors.headerBlue};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 20px;
  }
`;

const Link = styled(NavLink)``;

const Headline = styled.p`
  color: ${theme.colors.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: end;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 22px;
    text-align: right;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 36px;
    padding: 24px 28px 18px;
  }
  & > span {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 36px;
  }
`;

const HeadLogo = styled.img`
  width: 55px;
  height: 25px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 75px;
    height: 35px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 115px;
    height: 49px;
  }
`;

export { HeaderSection, HeaderContainer, Link, Headline, HeadLogo };
