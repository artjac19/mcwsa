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
  const ActiveComponent = tabComponents[activeTab as keyof typeof tabComponents];

  return (
    <div>
      <nav className="flex justify-center items-center bg-[#ED1472] py-4 gap-12 relative">
        <img
          src={`${import.meta.env.BASE_URL}mcwsalogowhite.png`}
          alt="MCWSA Logo"
          className="absolute left-5 top-2 -translate-y-1/2 w-16 h-16 object-contain drop-shadow-lg cursor-pointer"
          style={{ zIndex: 10 }}
          onClick={() => window.location.reload()}
        />
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
