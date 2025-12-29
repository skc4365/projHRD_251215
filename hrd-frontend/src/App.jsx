import './App.css'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import Layout from './layout/Layout.jsx';

import EmployeeManagement from './pages/EmployeeManagement.jsx';
import GolfClubSystem from './pages/GolfClubSystem.jsx';
import DiseaseTracking from './pages/DiseaseTracking.jsx';
import { BookManager } from './pages/bookmanager/BookManager.jsx';
import StudentEnrollment from './pages/StudentEnrollment.jsx';
import AuditionManagement from './pages/AuditionManagement.jsx';
import { ShopMember } from './pages/shop/ShopMember.jsx';


function App() {
  // 라우팅
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          {/* 쇼핑몰 */}
          <Route path="/shopmember/*" element={<ShopMember />} />
          {/* 도서관리 */}
          <Route path="/bookManager/*" element={<BookManager />} />
          {/* 사원관리 */}
          {/* <Route path="/employeeManagement" element={<EmployeeManagement />} /> */}
          {/* 수강신청 */}
          {/* <Route path="/studentEnrollment" element={<StudentEnrollment />} /> */}
          {/* 골프장관리 */}
          {/* <Route path="/golfClubSystem" element={<GolfClubSystem />} /> */}
          {/* 질병관리 */}
          {/* <Route path="/diseaseTracking" element={<DiseaseTracking />} /> */}
          {/* 오디션 */}
          {/* <Route path="/auditionManagement" element={<AuditionManagement />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App
