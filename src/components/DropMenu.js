import React, { useState } from 'react';
import { useAppState } from '../state';

function DropMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [rotate, setRotate] = useState(false);
  const { fetchWalletRes, selectedItems, _selectedItems, listBabyBadgerState, listBadgerState, userStaked, senderAddress, _badgers, _babyBadgers, badgers, babyBadgers } = useAppState();

  const handleAllCollectionsClick = () => {
    _badgers(false);
    _babyBadgers(false);
  };

  const handleBadgersClick = () => {
    _badgers(true);
    _babyBadgers(false);
  };

  const handleBabyBadgersClick = () => {
    _badgers(false);
    _babyBadgers(true);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setRotate(!rotate);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-between w-[100px] text-[6px] md:w-[211px] rounded-full border shadow-sm px-4 py-[10px] bg-[#9C95F8] bg-opacity-[.34] md:text-sm font-medium text-black hover:bg-purple-300"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleMenu}
        >
          All Collections
            <svg
                className={`flex -mr-1 ml-2 mt-[2px] h-4 w-3 stroke-current stroke-3 transform transition-transform ${
                    rotate ? '-rotate-90' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>

        </button>

        {showMenu ? (
          <div
            className="origin-top-right absolute right-0 mt-2 w-[211px] rounded-md shadow-lg bg-[#9C95F8] bg-opacity-[.2] ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
            <a
                href="#"
                className="block px-4 text-sm text-gray-700 hover:bg-purple-300 hover:text-gray-900"
                role="menuitem"
                onClick={handleAllCollectionsClick}
              >
                All Collections
              </a>
              <a
                href="#"
                className="block px-4 text-sm text-gray-700 hover:bg-purple-300 hover:text-gray-900"
                role="menuitem"
                onClick={handleBadgersClick}
              >
                Badgers
              </a>
              <a
                href="#"
                className="block px-4 text-sm text-gray-700 hover:bg-purple-300 hover:text-gray-900"
                role="menuitem"
                onClick={handleBabyBadgersClick}
              >
                Baby Badgers
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DropMenu;

