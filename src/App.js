import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import Header from "./component/include/Header";
import HomePage from "./component/pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
