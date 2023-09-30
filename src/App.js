import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Header from "./components/Header";
import Loading from "./components/LoadingBar"; // Import the Loading component

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-200">
        <Header />
        {/* Render the Loading component */}
        <Loading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
