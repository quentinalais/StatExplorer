
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Component/Home";
import { Dashboard } from "./Dashboard/Dashboard";


function App() {
  return (
   <BrowserRouter>
      
        <Header></Header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Dashboard" element={<Dashboard />}/>
        </Routes>
       

        <Footer></Footer>

      
   </BrowserRouter>
  );
}

export default App;
