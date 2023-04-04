import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MotionConfig, animate, motion, transform } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center bg-pink-400 text-white">
          <div className="flex flex-col text-6xl gap-y-4 text-center font-bold uppercase">
            <NavLink to={"/febaradio"}>
              FebaRadio
            </NavLink>
            
            <NavLink to={"/timeline"}>
              Timeline
            </NavLink>
            <NavLink to={"/dd"}>
              DragDrop
            </NavLink>
            <NavLink to={"/studio"}>
              Studio
            </NavLink>
            <NavLink to={"/courses"}>
              Courses
            </NavLink>
            <NavLink to={"/pokimon"}>
              Pokimon
            </NavLink>
            <NavLink to={"/jokes"}>
              Jokes
            </NavLink>
            <NavLink to={"/random"}>
              Random
            </NavLink>
            <NavLink to={"/try"}>
              Try
            </NavLink>
            <NavLink to={"/shop"}>
              SHOP
            </NavLink>
          </div>
      </main>
    </>
  );
}

export default App;
