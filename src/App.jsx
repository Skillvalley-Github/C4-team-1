import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Attendance from "./pages/Attendance";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
};

export default App;
