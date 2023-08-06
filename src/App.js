import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

import NotesState from "./context/NotesState"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    
    <NotesState>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/about" element={<About /> }/>
          <Route exact path="/contact" element={<Contact /> }/>
          <Route exact path="/" element={<Home /> }/>
        </Routes>
      </Router>
      
      </NotesState>
    </>
  );
}

export default App;
