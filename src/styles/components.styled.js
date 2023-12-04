import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
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

const BackLink = styled(StyledLink)`
  display: block;
`;

const Container = styled.div`
  padding: 20px;
`;

export { AppWrapper, StyledLink, StyledNavLink, BackLink, Container };
