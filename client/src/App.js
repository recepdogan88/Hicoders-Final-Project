import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/Admin";
import Exam from "./pages/Exam";
import Information from "./pages/Information";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Result from "./pages/Result";
import Home from "./pages/Home";
import NavBar from "./components/exam/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<Information />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
