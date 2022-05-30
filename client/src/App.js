import "./App.css";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import AdminPage from "./pages/Admin";
import Exam from "./pages/Exam";
function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Exam />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;