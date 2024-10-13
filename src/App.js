import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import Header from "./component/layout/Header";
import LoginPage from './component/pages/LoginPage';
import Footer from './component/layout/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
