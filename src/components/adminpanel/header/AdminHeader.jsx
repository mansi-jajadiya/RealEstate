// src/components/AdminHeader.js
import React from "react";
import { TfiHome } from "react-icons/tfi";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <header className="admin-header-section d-flex align-items-center justify-content-between px-3 py-2 shadow-sm">
      {/* Brand Logo + Name */}
      <div className="admin-brand-container d-flex align-items-center">
        <div className="admin-logo-icon me-2">
          <TfiHome size={28} />
        </div>
        <h4 className="admin-brand-name mb-0">houzez</h4>
      </div>

      {/* Right Side: Analytics -> Profile */}
      <div className="d-flex align-items-center">
        {/* Analytics Button */}
        <button className="analytics-button me-3">Analytics</button>

        {/* Profile Section */}
        <div className="admin-profile d-flex align-items-center">
          <div className="text-end me-4">
            <h6 className="mb-0 profile-name">Henry Jr.</h6>
            <small className=" profile-role">Admin</small>
          </div>
          <img
            src="/images/admin.jpg"   // ✅ Tumhari image
            alt="profile"
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
