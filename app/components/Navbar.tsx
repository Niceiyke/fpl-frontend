import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h4 className="text-white font-bold text-2xl">FPL Insight</h4>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/my-team">
              <h4 className="text-gray-300 hover:text-white">My-Team</h4>
            </Link>
          </li>
          <li>
            <Link href="/players">
              <h4 className="text-gray-300 hover:text-white">Players</h4>
            </Link>
          </li>
          <li>
            <Link href="/stats">
              <h4 className="text-gray-300 hover:text-white">Stats</h4>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <h4 className="text-gray-300 hover:text-white">Settings</h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;