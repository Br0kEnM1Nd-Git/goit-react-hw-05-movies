import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movies'}>Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
