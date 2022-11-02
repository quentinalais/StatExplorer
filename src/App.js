
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
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
<ChakraProvider>
    <BrowserRouter>
      <Header></Header>
      <div class="mx-5 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
