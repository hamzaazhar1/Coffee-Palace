import Maincontent from "./Maincontent";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import Services from "./Services";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Maincontent/>}>
        </Route>
        <Route exact path="/Aboutus" element={<Aboutus/>}>
        </Route>
        <Route exact path="/Services" element={<Services/>}>
        </Route>
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
