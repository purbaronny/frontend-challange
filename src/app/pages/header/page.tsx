"use client";

import useMenus from "@/app/hooks/useMenus";
import { Menu as MenuIcon, Search, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { menus, loading, error } = useMenus();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/img/logo-twiscode.png" alt="Company Logo" className="h-[60px]" />
        </div>

        {/* Desktop Navigation & Search */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
          {/* Search Button di Desktop */}
          <div className="flex items-center">
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 border border-gray-300 rounded-lg px-2 py-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  placeholder="Search"
                  className="outline-none px-2 w-32 font-poppins font-medium text-[14px] leading-[16px]"
                />
                <button type="submit" className="text-gray-600 font-poppins font-medium text-[14px] leading-[16px]">
                  <Search />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="text-gray-600 font-poppins font-medium text-[14px] leading-[16px]"
                >
                  <X />
                </button>
              </form>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="text-gray-600 font-poppins font-medium text-[14px] leading-[16px]">
                <Search />
              </button>
            )}
          </div>

          {/* Menu Navigasi */}
          <nav className="flex items-center space-x-6">
            {loading && <span>Loading...</span>}
            {error && <span className="text-red-500">{error}</span>}
            {!loading && !error &&
              menus
                .filter((menu) => menu.visible)
                .map((menu) => (
                  <a
                    key={menu.id}
                    href={menu.href}
                    className="text-gray-700 hover:text-blue-500 font-poppins font-medium text-[14px] leading-[16px]"
                  >
                    {menu.title}
                  </a>
                ))}
          </nav>
        </div>

        {/* Mobile View: Search & Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <MenuIcon className="text-gray-600 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 mt-2 shadow-lg rounded-lg">
          <nav className="flex flex-col space-y-2">
            {menus
              .filter((menu) => menu.visible)
              .map((menu) => (
                <a
                  key={menu.id}
                  href={menu.href}
                  className="block text-gray-700 hover:text-blue-500 font-poppins font-medium text-[14px] leading-[16px]"
                >
                  {menu.title}
                </a>
              ))}
          </nav>
        </div>
      )}
    </header>
  );
}
