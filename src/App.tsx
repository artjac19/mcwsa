import { useState } from "react";
import Home from "./Home";
import TeamInfo from "./TeamInfo";
import Resources from "./Resources";
import Events from "./Events";
import AboutUs from "./AboutUs";
import Merchandise from "./Merchandise";

const tabComponents = {
  Home,
  "Team Info": TeamInfo,
  Resources,
  Events,
  "About Us": AboutUs,
  Merchandise,
};

import { HamburgerIcon } from "./HamburgerIcon";

function App() {
  const tabs = [
    "Home",
    "Team Info",
    "Resources",
    "Events",
    "About Us",
    "Merchandise",
  ];
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const ActiveComponent = tabComponents[activeTab as keyof typeof tabComponents];

  // Close menu on tab click or X
  const handleMenuTab = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-stretch bg-[#ED1472] h-20 gap-4 md:gap-8 lg:gap-12 z-50 max-w-full overflow-x-hidden box-border overflow-y-hidden">
        <img
          src={`${import.meta.env.BASE_URL}mcwsalogowhite.png`}
          alt="MCWSA Logo"
          className="absolute left-2 top-0 p-2 w-20 h-20 object-contain drop-shadow-lg cursor-pointer max-h-20 z-50"
          onClick={() => window.location.reload()}
        />
        {/* Desktop Tabs */}
        <div className="hidden sm:flex flex-1 min-w-0 justify-evenly items-center pl-[15vw] pr-[5vw] h-20 overflow-x-hidden overflow-y-hidden">
          {tabs.map((tab) =>
  tab === "Merchandise" ? (
    <a
      key={tab}
      href="https://mcwsamerch.creator-spring.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative bg-transparent border-none text-white font-medium text-xl px-6 py-3 cursor-pointer outline-none transition-colors duration-200 group ${activeTab === tab ? "opacity-100" : "opacity-70"}`}
      style={{ textDecoration: 'none' }}
    >
      {tab}
      <span
        className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] bg-white rounded transition-all duration-300 w-0 group-hover:left-0 group-hover:translate-x-0 group-hover:w-full"
        aria-hidden="true"
      />
    </a>
  ) : (
    <button
      key={tab}
      className={`relative bg-transparent border-none text-white font-medium text-xl px-6 py-3 cursor-pointer outline-none transition-colors duration-200 group ${activeTab === tab ? "opacity-100" : "opacity-70"}`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
      <span
        className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] bg-white rounded transition-all duration-300 w-0 group-hover:left-0 group-hover:translate-x-0 group-hover:w-full"
        aria-hidden="true"
      />
    </button>
  )
)}
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden mx-auto p-3 bg-transparent border-none outline-none z-50 h-20 max-h-20 overflow-y-hidden z-50"
          style={{ minWidth: 48, minHeight: 48 }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <HamburgerIcon open={menuOpen} size={40} />
        </button>
        {/* Dropdown below Hamburger */}
        {menuOpen && (
          <div className="fixed left-0 right-0 top-20 w-full z-40">
            <div className="bg-[#ED1472] shadow-lg py-2 px-4 flex flex-col items-center animate-slideDown w-full max-h-[calc(100vh-80px)] overflow-y-auto">
              <nav className="flex flex-col gap-4 w-full items-center z-30">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`relative z-30 bg-transparent border-none text-white font-medium text-base sm:text-lg px-2 py-2 cursor-pointer outline-none transition-colors duration-200 group ${activeTab === tab ? "opacity-100" : "opacity-70"}`}
                    onClick={() => handleMenuTab(tab)}
                  >
                    {tab}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] bg-white rounded transition-all duration-300 w-0 group-hover:left-0 group-hover:translate-x-0 group-hover:w-full"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </nav>
      <div className="mt-8">
        <ActiveComponent />
      </div>
      {/* Footer Navigation - only for Team Info page */}
      {activeTab === "Team Info" && (
        <footer className="fixed bottom-0 left-0 w-full bg-[#ED1472] z-50 border-t border-pink-700">
          <nav className="flex justify-center items-center gap-8 py-3">
            {[
              { label: "Checklist", id: "checklist-section" },
              { label: "Point Opportunities", id: "points-section" },
              { label: "Teams", id: "teams-section" },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white font-medium text-lg px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-200"
                style={{ textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </nav>
        </footer>
      )}
    </div>
  );
}

export default App
