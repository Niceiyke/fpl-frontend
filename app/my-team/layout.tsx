// components/Layout.tsx
import Sidebar from '../components/Sidebar';
import { FC } from 'react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';

const sidebarItems = [
  { label: 'Home', href: '/', icon: <HomeIcon className="h-5 w-5" />, size: 5 },
  { label: 'Teams', href: '/my-team', icon: <UserIcon className="h-5 w-5" />, size: 5 },
  { label: 'Line-Up', href: '/my-team/best-lineup', icon: <UserIcon className="h-5 w-5" />, size: 5 },
  { label: 'Build Team', href: '/my-team/build-team', icon: <CogIcon className="h-5 w-5" />, size: 5 },
];

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar items={sidebarItems}  />
      <main className="flex-1 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
