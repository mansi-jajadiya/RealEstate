import React from "react";
import { Outlet } from "react-router-dom";
import Adminsidebar from "./sidebar/Adminsidebar";
import AdminHeader from "./header/AdminHeader";
const AdminLayout = () => {
  return (
    <div className="overflow-x-hidden">
    <AdminHeader />
    <div style={{ display: "flex" }}>
      <Adminsidebar/>
      <main  style={{backgroundColor:"#f5f5f5"}}>
        <Outlet />
      </main>
    </div>
    
    </div>    
  );
};

export default AdminLayout;
