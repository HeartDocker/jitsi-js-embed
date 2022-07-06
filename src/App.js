import './App.css';
import JitsiMode1 from './mode1/mode1';
import JitsiMode2 from './mode2/mode2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        

        <Link to="/mode1">Mode 1</Link>
        <Link to="/mode2">Mode 2</Link>
        <div style={{ height: "90vh" }}>
          <Routes>
            <Route path="/mode1" element={<JitsiMode1 />} />
            <Route path="/mode2" element={<JitsiMode2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
