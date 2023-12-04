import { Outlet } from 'react-router-dom';
import { StyledNavLink } from 'styles/components.styled';

const Layout = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <StyledNavLink to={'/'}>Home</StyledNavLink>
        <StyledNavLink to={'/movies'}>Movies</StyledNavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
