import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import A from "./pages/a";
import B from "./pages/b";

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
