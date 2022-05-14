import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Form from "./Component/Form";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./Component/Home";
import { Dashboard } from "./Dashboard/Dashboard";


function App() {
  return (
   <BrowserRouter>
      <div>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Dashboard" element={<Dashboard />}/>
        </Routes>

        <Footer></Footer>

      </div>
      
   </BrowserRouter>
  );
}

export default App;
