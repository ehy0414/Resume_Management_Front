import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import UserBoardPage from './component/pages/UserBoardPage';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import JoinPage from './component/pages/JoinPage';
import LoginPage from './component/pages/LoginPage';
import ProfilePage from './component/pages/ProfilePage';
import ResumPage from './component/pages/ResumPage';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <BrowserRouter>
       <Header userInfo={userInfo} setUserInfo={setUserInfo} />
      <Routes>
        <Route path="/" element={<LoginPage setUserInfo={setUserInfo}/>}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
        <Route path="/board" element={<UserBoardPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/resume" element={<ResumPage />}></Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
