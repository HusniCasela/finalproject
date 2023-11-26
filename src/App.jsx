import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Reset from "../src/pages/Reset";
import ResetTautan from "./pages/ResetTautan";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Reset" element={<Reset />}></Route>
          <Route path="/ResetTautan" element={<ResetTautan />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
