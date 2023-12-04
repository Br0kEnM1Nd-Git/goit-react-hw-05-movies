import { Outlet } from 'react-router-dom';
import { AppWrapper } from 'styles/components.styled';
import { NavPanel, PageLink } from './layout.styled';

const Layout = () => {
  return (
    <AppWrapper>
      <NavPanel>
        <PageLink to={'/'}>Home</PageLink>
        <PageLink to={'/movies'}>Movies</PageLink>
      </NavPanel>
      <Outlet />
    </AppWrapper>
  );
};

export default Layout;
