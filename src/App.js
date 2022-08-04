import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          {/* <Route exact path="/**">
            <NotFound />
          </Route> */}
        </Switch>
      </div>
  );
}

export default App;
