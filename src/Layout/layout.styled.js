import styled from 'styled-components';
import { StyledNavLink } from 'styles/components.styled';

const NavPanel = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #999999;
  padding: 12px 0;
`;

const PageLink = styled(StyledNavLink)`
  padding: 5px;
  background-color: #fff;
  border-radius: 30px;
  &.active {
    color: #990033;
  }
  &:hover {
    box-shadow: 0 0 5px black;
  }
`;

export { NavPanel, PageLink };
