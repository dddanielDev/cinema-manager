import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetAvailableFeaturesQuery } from "../features/availableFeatures/availableFeaturesApi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: availableFeatures } = useGetAvailableFeaturesQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });

  return (
    <div className="bg-indigo-700 min-h-screen relative p-4">
      {/** hamburger icon */}
      <div
        className={`${
          isOpen ? "hidden" : " block"
        } md:hidden text-white text-3xl cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        ☰
      </div>

      {/** desktop menu */}
      <div
        className={` ${isOpen ? "flex" : "hidden"} md:flex text-white flex-col`}
      >
        {/** close button */}
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </div>
        <h2 className="text-2xl font-bold p-4">CinemaManager</h2>
        <nav className="flex flex-col gap-2 px-4">
          {availableFeatures?.includes("Movies") && (
            <NavLink to="/" className="hover:bg-indigo-600 p-2 rounded">
              Movies
            </NavLink>
          )}
          {availableFeatures?.includes("CinemaHalls") && (
            <NavLink
              to="/cinemahalls"
              className="hover:bg-indigo-600 p-2 rounded"
            >
              Cinema Halls
            </NavLink>
          )}
          {availableFeatures?.includes("Schedules") && (
            <NavLink to="/schedule" className="hover:bg-indigo-600 p-2 rounded">
              Schedule
            </NavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
