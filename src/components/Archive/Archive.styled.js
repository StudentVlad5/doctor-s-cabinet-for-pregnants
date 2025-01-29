import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';

const ArchiveContainer = styled(Container)`
  position: relative;
  /* min-height: calc(100vh - 150px); */
`;

const Title = styled.h1`
  margin-top: 20px;

  color: ${theme.colors.black};
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: end;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 36px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 44px;
  }
`;

const Subtitle = styled.h2`
  margin-top: 20px;

  color: ${theme.colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;

export { ArchiveContainer, Title, Subtitle };
