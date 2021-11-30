import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import NavMenu from './components/NavMenu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
            <HeroSection />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
