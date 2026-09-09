
const Navbar = ({coins}:{coins:number}) => {
    return (
        <div className=" sticky top-0 z-50">
           <div className="navbar bg-[#0f172a] text-white px-4 md:px-8 shadow-xl border-b border-gray-800 ">
        
        {/* Brand / Logo Section */}
        <div className="navbar-start">
          {/* Mobile Drawer/Dropdown Toggle */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0f172a] rounded-box w-52 border border-gray-800 text-gray-300">
              <li><a>Home</a></li>
              <li>
                <a>Categories</a>
                <ul className="p-2">
                  <li><a>Beauty</a></li>
                  <li><a>Fragrances</a></li>
                  <li><a>Skincare</a></li>
                </ul>
              </li>
              <li><a>Offers</a></li>
            </ul>
          </div>
          
          <a className="btn btn-ghost text-xl font-bold tracking-wider text-amber-400 normal-case">
            BEAUTY<span className="text-white">STORE</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-300 gap-1">
            <li><a className="hover:text-amber-400 transition-colors">Home</a></li>
            <li tabIndex={0}>
              <details>
                <summary className="hover:text-amber-400 transition-colors">Categories</summary>
                <ul className="p-2 bg-[#0f172a] border border-gray-800 rounded-lg w-40 z-[1]">
                  <li><a className="hover:text-amber-400">Beauty</a></li>
                  <li><a className="hover:text-amber-400">Fragrances</a></li>
                  <li><a className="hover:text-amber-400">Skincare</a></li>
                </ul>
              </details>
            </li>
            <li><a className="hover:text-amber-400 transition-colors">Best Sellers</a></li>
            <li><a className="hover:text-amber-400 transition-colors">Offers</a></li>
          </ul>
        </div>

        {/* Right Section: Coins, Cart, and User Profile */}
        <div className="navbar-end gap-3 md:gap-4">
          
          {/* AVAILABLE COINS PORTION */}
          <div className="flex items-center gap-2 bg-[#1e293b] hover:bg-[#283548] border border-amber-400/40 rounded-full px-3.5 py-1.5 transition-all shadow-inner cursor-pointer" title="Your Reward Coins">
            {/* Coin Icon */}
            <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-[#0f172a] font-black text-xs shadow">
              🪙
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Coins</span>
              <span className="text-sm font-bold text-amber-400">{coins}</span>
            </div>
          </div>
          

          {/* User Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full ring ring-amber-400 ring-offset-base-100 ring-offset-2">
                <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1e293b] border border-gray-700 rounded-box w-52 text-gray-200">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge bg-amber-400 text-black border-none text-xs font-bold">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>My Orders</a></li>
              <li className="border-t border-gray-700 mt-1 pt-1"><a>Logout</a></li>
            </ul>
          </div>

        </div>
      </div>

        </div>
    );
};

export default Navbar;