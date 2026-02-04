import NavBar from "./components/NavBar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from './components/Banner'
import Skills from './components/Skills'
import {Projects} from "./components/Projects";
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<><Banner /><Skills /><Projects /><Footer /></>} />
        <Route path="/projects/:category/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
