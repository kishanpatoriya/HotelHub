import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import  Navbar  from "./componets/Navbar";
import  Home  from "./pages/Home";
import Hotels from "./pages/Hotels"
import  Footer  from "./componets/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const MainLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Hotels" element={<Hotels />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
