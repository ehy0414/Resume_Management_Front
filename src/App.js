import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import UserBoardPage from './component/pages/UserBoardPage';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import JoinPage from './component/pages/JoinPage';
import LoginPage from './component/pages/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
