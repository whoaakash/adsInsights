import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreateAds from "./components/CreateAds";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ads" element={<CreateAds />} />
          <Route path="/form/:selectedCard" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
