import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addTodo" element={<CreateTask/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
