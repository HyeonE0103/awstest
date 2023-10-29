import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import A from "./pages/A";
import B from "./pages/B";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
