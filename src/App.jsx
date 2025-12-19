import { Routes, Route } from "react-router-dom";
import IpoList from "./pages/IpoList";
import IpoDetails from "./pages/IpoDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IpoList />} />
      <Route path="/ipo/:id" element={<IpoDetails />} />
    </Routes>
  );
}

export default App;
