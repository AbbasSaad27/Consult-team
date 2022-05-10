import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import "./App.css"
import Dashboard from "./pages/dashboard/dashboard.page";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home/*" element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
