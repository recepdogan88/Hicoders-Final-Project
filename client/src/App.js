import { BrowserRouter ,Routes,Route} from "react-router-dom";
import AdminPage from "./pages/Admin";
import Exam from "./pages/Exam";
import Information from "./pages/Information";
import Result from "./pages/Result";


function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/result" element={<Result />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
