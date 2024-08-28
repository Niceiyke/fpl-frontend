// components/Sidebar.tsx

import Link from 'next/link';
import { FC } from 'react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';


type SidebarItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;  // Optional icon for the sidebar item
};


const sidebarItems: SidebarItem[] = [
  { label: 'Home', href: '/', icon: <HomeIcon className="h-5 w-5" /> },
  { label: 'Teams', href: '/my-team', icon: <UserIcon className="h-5 w-5" /> },
  { label: 'Line-Up', href: '/my-team/best-lineup', icon: <UserIcon className="h-5 w-5" /> },
  
  { label: 'Settings', href: '/settings', icon: <CogIcon className="h-5 w-5" /> },
];

const Sidebar: FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <nav>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.href} className="mb-2">
              <Link href={item.href}>
                <h3 className="flex items-center p-2 rounded-md hover:bg-gray-700 transition">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
