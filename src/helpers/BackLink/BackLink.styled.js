import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';

const GoBack = styled(Link)`
  all: unset;

  display: inline-flex;
  align-items: center;
  gap: 5px;

  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  color: ${theme.white};
  text-decoration: none;
  text-transform: uppercase;

  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.grey};
  }
`;

export { GoBack };
