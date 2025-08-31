import React from "react";
import { FiUsers, FiLayers } from "react-icons/fi";
import { TfiHome } from "react-icons/tfi";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import "./Adminsidebar.css";


const Adminsidebar = () => {
  return (
    <div className="admin-sidebar-wrapper" >
      <div className=" d-none d-md-block">
  
    <nav className="admin-navigation-panel">
      
      <ul className="admin-menu-list">
        
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <TbLayoutDashboard size={32} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">Dashboard</span>
          </div>
        </li>
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <FiUsers size={20} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">Agents</span>
          </div>
        </li>
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <FiLayers size={20} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">For Rent</span>
          </div>
        </li>
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <RiUserSettingsLine size={32} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">Users</span>
          </div>
        </li>
      </ul>
    </nav>
     </div>
     
      {/* Mobile Button to toggle Offcanvas */}
      <button
        className="btn btn-outline-secondary d-md-none m-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#adminSidebarOffcanvas"
        aria-controls="adminSidebarOffcanvas"
      >
        
        ☰
      </button>
      {/* Offcanvas for mobile */}
      <div
        className="offcanvas offcanvas-start adminhello"
        tabIndex="-1"
        id="adminSidebarOffcanvas"
        aria-labelledby="adminSidebarLabel"
      >
        
        <div className="offcanvas-header">
          
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
        
    <nav className="admin-navigation-panel">
      
      <ul className="admin-menu-list">
        
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <TbLayoutDashboard size={32} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">Dashboard</span>
          </div>
        </li>
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <FiUsers size={20} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">Agents</span>
          </div>
        </li>
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <FiLayers size={20} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">For Rent</span>
          </div>
        </li>
        <li className="admin-menu-item">
          
          <div className="admin-menu-link">
            
            <RiUserSettingsLine size={32} className="admin-menu-icon" />
            <span className="admin-menu-text mt-2">Users</span>
          </div>
        </li>
      </ul>
    </nav>
        </div>
      </div>
    </div>
  );
};
export default Adminsidebar;
