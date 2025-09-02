import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Userinfo.css";
import { useNavigate } from "react-router-dom";

const Userinfo = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/cards") // JSON Server endpoint
      .then((res) => {
        // सिर्फ पहले 22 records दिखाओ
        const limited = res.data.slice(0, 22);
        setProperties(limited);
      })
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  return (
    <div className="user-log-page">
      <div className="container mt-5">
         <div className="mb-4 user-log-path d-flex align-items-center">
            <span className="user-span">Property Listing</span>
          </div>
        <div className="user-card shadow-sm border-0">
         
          <div className="user-card-body p-0">
            
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="user-head">
                  <tr>
                    <th>No.</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    <th>Cars</th>
                    <th>Area</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((p, index) => (
                    <tr key={p.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={p.image1}
                          alt={p.title}
                          width="70"
                          height="50"
                          style={{ objectFit: "cover", borderRadius: "6px" }}
                        />
                      </td>
                      <td>{p.title}</td>
                      <td>{p.category}</td>
                      <td>${p.price}</td>
                      <td>{p.bedrooms}</td>
                      <td>{p.bathrooms}</td>
                      <td>{p.cars}</td>
                      <td>{p.area}</td>
                    </tr>
                  ))}
                  {properties.length === 0 && (
                    <tr>
                      <td colSpan="9" className="text-center p-3">
                        No properties found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
