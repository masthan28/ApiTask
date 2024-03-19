import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import Featured from './Featured'
import './MainLayout.css'


const MainLayout = () => {
  return (
    <div className="main-layout">
     
      <Header></Header>
     
      <Sidebar />
      <Featured></Featured>
    
    </div>
  );
};

export default MainLayout;