import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Podcast from "../Pages/Podcast";
import Contact from "../Pages/Contact";
import DragDrop from "../Pages/DragDrop/DragDrop";
import Kanban from "../Pages/DragDrop/DragDrop";
import Studio from "../studio/Studio";
import Header from "../Components/Header";
import Courses from "../Courses/courses";
import Pokimon from "../Pokimon/Pokimon";
import Jokes from "../Jokes/Jokes";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Header/>
      <Routes key={location.key} location={location}>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/podcast" element={<Podcast/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dd" element={<Kanban/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/pokimon" element={<Pokimon/>}/>
        <Route path="/jokes" element={<Jokes/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
