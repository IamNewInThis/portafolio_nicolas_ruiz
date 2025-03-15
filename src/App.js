import NavBar from "./components/NavBar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from './components/Banner'
import Skills from './components/Skills'
import {Projects} from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/portafolio_nicolas_ruiz">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<><Banner /><Skills /><Projects /><Footer /></>} />
          <Route path="/projects/:category/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
