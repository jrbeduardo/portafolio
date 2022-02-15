import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const Header = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "Inicio",
      key: "/",
    },
    {
      title: "Proyectos",
      key: "/proyectos",
    },
    {
      title: "Cursos",
      key: "/cursos",
    },
    {
      title: "Contacto",
      key: "/contacto",
    },
  ];
  return (
    <div className="text-white font-raleway sticky left-0 top-0 z-50">
      <div
        className={
          showMenu === "md:hidden"
            ? "flex bg-tomato justify-between items-baseline p-2 shadow-lg"
            : "flex bg-tomato md:flex-col bg-theme justify-between items-baseline p-2 shadow-lg"
        }
      >
        <div className="flex justify-between items-baseline w-full">
          <h1 className="text-2xl font-semibold shadow-gray-600 hover:text-limon cursor-pointer"> 
          <Link to="/"> 🟢jrbeduardo</Link>
          </h1>
          <button
            onClick={() =>
              showMenu === "md:hidden"
                ? setShowMenu("md:flex")
                : setShowMenu("md:hidden")
            }
            className="hidden md:flex cursor-pointer"
          >
            {showMenu === "md:hidden" ? <FaBars className=" hover:text-limon"/> : <MdClose className=" hover:text-limon"/>}
          </button>
        </div>
        <ul className="flex text-white md:hidden">
          {menuItems.map((item) => (
            <li className="list-none mx-5" key={item.key}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "",
                    borderRadius: isActive ? "5px" : "white",
                    color: isActive ? "black" : "white",
                    padding: ".2rem",
                  };
                }}
                to={item.key}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={`hidden flex-col text-white ${showMenu}`}>
          {menuItems.map((item) => (
            <li className="list-none my-2 " key={item.key}>
              <NavLink 
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "",
                    borderRadius: isActive ? "5px" : "white",
                    color: isActive ? "black" : "white",
                    padding: ".2rem",
                  };
                }}
                to={item.key}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
