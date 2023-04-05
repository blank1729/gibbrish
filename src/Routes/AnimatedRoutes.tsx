import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import Blog from "../Sites/FebaOnline/Blog";
import About from "../Sites/FebaOnline/About";
import Podcast from "../Sites/FebaOnline/Podcast";
import Contact from "../Sites/FebaOnline/Contact";
import DragDrop from "../Sites/DragDrop/DragDrop";
import Kanban from "../Sites/DragDrop/DragDrop";
import Studio from "../Sites/studio/Studio";
import Header from "../Sites/FebaOnline/Header";
import Courses from "../Sites/Courses/courses";
import Pokimon from "../Sites/Pokimon/Pokimon";
import Jokes from "../Sites/Jokes/Jokes";
import Timeline from "../Sites/other/Timeline";
import Random from "../Sites/VideoTimeline/Random";
import FebaHome from "../Sites/FebaOnline/Home";
import Navbar from "../Sites/Try/navbar";
import Try from "../Sites/Try/Try";
import TryDiv from "../Sites/Try/TryDiv";
import Modal from "../Sites/Try/components/Modal";
import Button from "../Sites/Try/components/Buttons/Button";
import Home from "../Sites/shop/Home";
import ShopHeader from "../Sites/shop/Header";
import Slider from "../Sites/Try/components/Slider";
import Test from "../Sites/Try/Test";
import Todo from "../Sites/Todo/Todo";

// [reactjs - Render component on certain paths only react router v6 - Stack Overflow](https://stackoverflow.com/questions/71112957/render-component-on-certain-paths-only-react-router-v6)
// used this for routing and rendering diffrent header for diffrent routes
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="/febaradio" element={<FebaHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
      <Routes>
        {/* main home page */}
        <Route
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route element={<App />} path="/" />
        </Route>

        {/* Feba Online site */}

        <Route
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="/dd" element={<Kanban />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pokimon" element={<Pokimon />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/random" element={<Random />} />
          <Route path="/studio" element={<Studio />} />
        </Route>

        {/* try site */}
        <Route element={<TryDiv />}>
          <Route path="/try" element={<Try />}></Route>
          <Route path="/try/modal" element={<Modal />} />
          <Route path="/try/button" element={<Button />} />
          <Route path="/try/slider" element={<Slider />} />
          <Route path="/try/test" element={<Test />} />
        </Route>
          
          {/* shop Route */}
          <Route
          element={
            <>
              <ShopHeader/>
              <Outlet />
            </>
          }
        >
          <Route path="/shop" element={<Home />}></Route>
        </Route>
        <Route path="/todo" element={<Todo />} />
      </Routes>

    </AnimatePresence>
  );
}

export default AnimatedRoutes;
