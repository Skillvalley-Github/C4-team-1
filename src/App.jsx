import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Shared/Layout'
import Index from "./pages/Index";
import Attendance from "./pages/Attendance";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
};

export default App;
