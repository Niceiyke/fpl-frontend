import Link from 'next/link';
import { FC } from 'react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface SidebarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  size?: number;
  color?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  width?: number;
}

const SidebarItemComponent: FC<SidebarItem> = ({ ...item }) => {
  return (
    <li key={item.href} className="mb-2">
      <Link href={item.href}>
        <h3 className="flex items-center p-2 rounded-md hover:bg-gray-700 transition">
          {item.icon && (
            <span
              className={`mr-2 ${item.size ? `h-${item.size} w-${item.size}` : ''} ${item.color ? `text-${item.color}` : ''}`}
            >
              {item.icon}
            </span>
          )}
          {item.label}
        </h3>
      </Link>
    </li>
  );
};

const Sidebar: FC<SidebarProps> = ({ items, width }) => {
  return (
    <aside className={`w-${width} h-screen bg-gray-800 text-white p-4 mt-4`}>
      <nav>
        <ul>
          {items.map((item) => (
            <SidebarItemComponent key={item.href} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;