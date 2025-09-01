import React from "react";
import { TfiHome } from "react-icons/tfi";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <header className="admin-header-section d-flex align-items-center justify-content-between px-3 py-2 shadow-sm">
      <div className="admin-brand-container d-flex align-items-center">
        <div className="admin-logo-icon me-2">
          <TfiHome size={28} />
        </div>
        <h4 className="admin-brand-name mb-0">houzez</h4>
      </div>

      <div className="d-flex align-items-center">
        <p className="analytics-button me-3 d-none d-md-block">Analytics</p>
        <div className="admin-profile d-flex align-items-center d-none d-md-flex">
          <div className="text-end me-4">
            <h6 className="mb-0 profile-name">Henry Jr.</h6>
            <small className=" profile-role">Admin</small>
          </div>
          <img src="/images/admin.jpg" alt="profile" className="profile-img" />
        </div>

        {/* 👇 Toggle button for mobile sidebar */}
        <button
          className="btn btn-outline-secondary d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#adminSidebarOffcanvas"
          aria-controls="adminSidebarOffcanvas"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
