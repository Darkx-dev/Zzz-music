import React from "react";

const NavBar = () => {
  return (
    <nav className="flex h-10 items-center justify-between bg-[#E0007A] px-2">
      <div>
        <h1 className="py-1 text-2xl font-bold text-white">Zzz</h1>
      </div>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
