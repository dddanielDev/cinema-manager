import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-screen relative'>
      <Sidebar />
      <main className='flex-1 p-4 bg-gray-50'>{children}</main>
    </div>
  );
};

export default Layout;
