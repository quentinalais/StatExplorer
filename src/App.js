
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
import Todo from "./Dashboard/Todo";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div class="mx-5 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
