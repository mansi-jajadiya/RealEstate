import React from "react";
import { Outlet } from "react-router-dom";
import Adminsidebar from "./sidebar/Adminsidebar";
import AdminHeader from "./header/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="overflow-x-clip">
      <AdminHeader />
      <div style={{ display: "flex" }}>
        <Adminsidebar />
        <main
          style={{
            backgroundColor: "#f5f5f5",
            flex: 1,
            minHeight: "100vh",
            padding: "20px"
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
