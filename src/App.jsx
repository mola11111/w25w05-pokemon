import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    // 1. <BrowserRouter>로 전체 앱을 감싸서 라우팅 기능 활성화
    <BrowserRouter>
      <nav>
        {/* 2. <Link>를 사용하여 페이지 간 이동 링크 생성 */}
        <Link to="/">홈</Link> | <Link to="/about">소개</Link>  
      </nav>

      {/* 3. <Routes>는 경로 정의(<Route>들)의 컨테이너 역할 */}
      <Routes>
        {/* 4. <Route>는 특정 path와 해당 path에서 렌더링할 element(컴포넌트)를 매핑 */}
        {/* path="/"일 때 <Home /> 컴포넌트 렌더링 */}
        <Route path="/" element={<Home />} />

        {/* path="/about"일 때 <About /> 컴포넌트 렌더링 */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <>
      <h2>홈 페이지</h2>
      <p>여기는 홈 페이지입니다.</p>
    </>
  )
}

const About = () => (
  <>
    <h2>소개 페이지</h2>
    <p>여기는 소개 페이지입니다.</p>
    <img src={reactLogo} className="logo react" alt="React logo" />
    <img src={viteLogo} className="logo vite" alt="Vite logo" />
  </>
)

export default App

