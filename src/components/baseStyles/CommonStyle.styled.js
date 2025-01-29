import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
    padding: 30px;
  }
`;
