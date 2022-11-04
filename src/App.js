
import "./App.css";
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Component/Home";
import { Dashboard } from "./Dashboard/Dashboard";
import { ChakraProvider } from '@chakra-ui/react'
import SimpleSidebar from "./Component/Sidebar";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* <Header></Header> */}
        <SimpleSidebar >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explore" element={<Dashboard />} />
          </Routes>
        </SimpleSidebar>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
