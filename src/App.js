import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LeaguePage,
  OverwatchPage,
  OtherPage
} from "./pages";
import Tabs from "./components/Tabs/Tabs";

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
