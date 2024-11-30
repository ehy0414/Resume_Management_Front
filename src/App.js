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

  useEffect(() => {
    // localStorage에서 사용자 정보 가져오기
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo)); // JSON 문자열을 객체로 변환
    }
  }, []);

  const handleLogin = (user) => {
    setUserInfo(user);
    localStorage.setItem("userInfo", JSON.stringify(user)); // 사용자 정보를 localStorage에 저장
  };

  const handleLogout = () => {
    setUserInfo(null);
    localStorage.removeItem("userInfo"); // localStorage에서 사용자 정보 삭제
  };

  return (
    <BrowserRouter>
       <Header userInfo={userInfo} setUserInfo={handleLogout} />
      <Routes>
        <Route path="/" element={<LoginPage setUserInfo={handleLogin}/>}></Route>
        <Route path="/join" element={<JoinPage />}></Route>
        <Route path="/board" element={<UserBoardPage />}></Route>
        <Route path="/profile/:userId" element={<ProfilePage />}></Route>
        <Route path="/resume" element={<ResumPage />}></Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
