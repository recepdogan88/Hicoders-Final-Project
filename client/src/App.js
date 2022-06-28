import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/Admin";
import Exam from "./pages/Exam";
import Information from "./pages/Information";
import Result from "./pages/Result";
import NavBar from "./components/exam/NavBar";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import { EnglishContext } from "./context/EnglishContext";
import Home from "./pages/Home";



function App() {
  const {user} = useContext(EnglishContext)
  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <>
          <Route path="/home" element={<Home />} /> 
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </>
        )}
          {user && 
          (
            <>
            <Route path="/information" element={<Information />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/result" element={<Result />} />
          </>
          )
  	      }
          {/* {user?.isAdmin && 
            
          } */}
            <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
