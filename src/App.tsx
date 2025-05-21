import { useState } from "react";
import Home from "./Home";
import TeamInfo from "./TeamInfo";
import Resources from "./Resources";
import Events from "./Events";
import People from "./People";
import Contact from "./Contact";
import Merchandise from "./Merchandise";

const tabComponents = {
  Home,
  "Team Info": TeamInfo,
  Resources,
  Events,
  People,
  Contact,
  Merchandise,
};

function App() {
  const tabs = [
    "Home",
    "Team Info",
    "Resources",
    "Events",
    "People",
    "Contact",
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
        {tabs.map((tab) => (
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
        ))}
      </nav>
      <div className="mt-8">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default App
