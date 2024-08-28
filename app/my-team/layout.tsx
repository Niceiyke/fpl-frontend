// components/Layout.tsx

import { FC } from 'react';
import Sidebar from '../components/Sidebar';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-500 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
