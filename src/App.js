import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ExploreComponent from "./tuiter/explore";
import HomeComponent from "./tuiter/home";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter" element={<HomeComponent />} />
          <Route path="/tuiter/explore" element={<ExploreComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
