import {
  FaHome,
  FaUsers,
  FaMoneyBill,
  FaCar,
  FaQrcode,
  FaVideo,
  FaShieldAlt,
  FaBuilding,
  FaIdCard,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import clsx from "clsx";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: <FaHome />,
  },

  {
    label: "Residentes",
    path: "/residents",
    icon: <FaUsers />,
  },

  {
    label: "Propiedades",
    path: "/properties",
    icon: <FaBuilding />,
  },

  {
    label: "Carnets",
    path: "/cards",
    icon: <FaIdCard />,
  },

  {
    label: "Pagos",
    path: "/payments",
    icon: <FaMoneyBill />,
  },

  {
    label: "Accesos",
    path: "/access",
    icon: <FaCar />,
  },

  {
    label: "Visitas QR",
    path: "/visitors",
    icon: <FaQrcode />,
  },

  {
    label: "Monitoreo",
    path: "/surveillance",
    icon: <FaVideo />,
  },

  {
    label: "Seguridad",
    path: "/security",
    icon: <FaShieldAlt />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-700 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-amber-400">
          Villas del Sol
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Sistema Integral Residencial
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium",
                {
                  "bg-amber-500 text-black":
                    isActive,

                  "text-slate-300 hover:bg-slate-800 hover:text-white":
                    !isActive,
                }
              )
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button className="w-full bg-red-600 hover:bg-red-700 transition rounded-xl py-3 font-semibold">
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}