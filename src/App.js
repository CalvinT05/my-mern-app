import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeaguePage from "./pages/LeaguePage";
import OverwatchPage from "./pages/OverwatchPage";
import OtherPage from "./pages/OtherPage";
import Tabs from "./components/tabs";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Greetings! We are op.gg but poorer</h1>
        <Tabs /> {/* Tabs for switching pages */}
        <Routes>
          <Route path="/league" element={<LeaguePage />} />
          <Route path="/overwatch" element={<OverwatchPage />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
