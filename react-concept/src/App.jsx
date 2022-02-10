import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Componants/Content";
import Home from "./Componants/Home";
import Navbar from "./Componants/Navbar";
import Private from "./Componants/Private";
import Signin from "./Componants/Signin";
import Signup from "./Componants/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/content"
          element={
            <Private>
              <Content />
            </Private>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
//why to use
