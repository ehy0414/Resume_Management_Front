import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import Header from "./component/include/Header";
import HomePage from "./component/pages/HomePage";
import Footer from './component/layout/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
