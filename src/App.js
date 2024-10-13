import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import UserBoardPage from './component/pages/UserBoardPage';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path='/' element={<UserBoardPage />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
