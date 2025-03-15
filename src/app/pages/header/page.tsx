"use client"

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo - Tetap di Kiri */}
        <div className="flex items-center">
          <img src="/assets/img/logo-twiscode.png" alt="Company Logo" className="h-10" />
        </div>

        {/* Search + Menu dalam satu flex agar lebih dekat */}
        <div className="flex items-center space-x-4">
          {/* Search - Klik untuk menampilkan input */}
          {searchOpen ? (
            <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 border border-gray-300 rounded-lg px-2 py-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                placeholder="Search"
                className="outline-none px-2"
              />
              <button type="submit" className="text-gray-600">
                <Search />
              </button>
              <button type="button" onClick={() => setSearchOpen(false)} className="text-gray-600">
                <X />
              </button>
            </form>
          ) : (
            <Search className="text-gray-600 cursor-pointer" onClick={() => setSearchOpen(true)} />
          )}

          {/* Menu - Sekarang di kanan setelah search */}
          <nav className="hidden md:flex space-x-6">
            {["Home", "Work", "Service", "Our Customer", "Team", "Career", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "_")}`} className="text-gray-700 hover:text-blue-500">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Menu className="text-gray-600 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 mt-2 shadow-lg rounded-lg">
          <nav className="flex flex-col space-y-2">
            {["Home", "Work", "Service", "Our Customer", "Team", "Career", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-blue-500">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
