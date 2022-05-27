
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
import Attestation from "./Dashboard/Attestation";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div class="mx-5 py-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Attestation" element={<Attestation />} />
        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
