import { NavLink } from "react-router-dom";

const Tabs = () => {
  const tabs = [
    { name: "League Page", path: "/league" },
    { name: "Overwatch Page", path: "/overwatch" },
    { name: "Other Page", path: "/other" },
  ];

  return (
    <div className="flex space-x-6 border-b border-gray-700 mb-6">
      {tabs.map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `pb-2 font-semibold text-sm transition-colors ${
              isActive
                ? "border-b-2 border-blue-500 text-white"
                : "text-gray-400 hover:text-white"
            }`
          }
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default Tabs;
