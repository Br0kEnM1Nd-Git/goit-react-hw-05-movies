import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: '100vh';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
`;

const StyledLink = styled(Link)`
  color: blue;
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

export { AppWrapper, StyledLink, StyledNavLink };
