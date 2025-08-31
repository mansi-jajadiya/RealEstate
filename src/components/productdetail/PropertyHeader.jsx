import React from "react";
import { useNavigate } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import "./PropertyHeader.css";

export default function PropertyHeader() {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <nav className="mb-3">
        <ol className="breadcrumb small mb-0">
          <li
            className="breadcrumb-item header-breadcrumb"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <RiHomeLine className="me-1 text-dark" /> Home
          </li>

          <li
            className="breadcrumb-item header-breadcrumbactive"
            aria-current="page"
          >
            Modern apartment on the bay
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h2 className="header  mb-2">Modern Apartment On The Bay</h2>
          <p className="address text-muted mb-3">
            <CiLocationOn className="me-1" size={20} />
            3000 Florida Ave, Miami, FL 33133, USA
          </p>
        </div>

        <div className="text-end">
          <div className="d-flex justify-content-end gap-2 mb-2">
            <button className="btn icon-btn btn-outline-light border">
              <CiHeart className="text-danger" size={20} />
            </button>
            <button className="btn icon-btn btn-outline-light border">
              <BsShare className="text-dark" />
            </button>
            <button className="btn icon-btn btn-outline-light border">
              <BsPrinter className="text-dark" />
            </button>
          </div>
          <h3 className="fw-bold price-main">
            $4,500<span className=" price-main-1 fw-normal">/mo</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
