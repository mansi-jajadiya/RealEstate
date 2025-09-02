import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Adminrent.css";

const Adminrent = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/cards")
      .then((res) => {
        const limited = res.data.slice(0, 22); // total 22 items
        setProperties(limited);
      })
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  // Page logic
  const totalItems = properties.length;
  const totalPages = 2; // force only 2 pages
  const propertiesPerPage = currentPage === 1 ? 10 : totalItems - 10;

  const indexOfLast = currentPage === 1 ? 10 : totalItems;
  const indexOfFirst = currentPage === 1 ? 0 : 10;

  const currentProperties = properties.slice(indexOfFirst, indexOfLast);

  return (
    <div className="admin-properties-page">
      <div className="container mt-3">
        <div className="mb-4 prop-path d-flex align-items-center">
          <span className="prop-span">Property Listing</span>
        </div>
        <div className="prop-card shadow-sm border-0">
          <div className="prop-card-body p-0 overflow-hidden">
            {/* <div className="table-wrapper">
  <table className="prop-table">
    <thead className="prop-head">
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
      {currentProperties.map((p, index) => (
        <tr key={p.id}>
          <td>{indexOfFirst + index + 1}</td>
          <td>
            <img
              src={p.image1}
              alt={p.title}
              width="70"
              height="50"
              style={{ objectFit: "cover", borderRadius: "6px" }}
            />
          </td>
          <td data-label="Title">{p.title}</td>
          <td data-label="Category">{p.category}</td>
          <td data-label="Price">${p.price}</td>
          <td data-label="Bedrooms">{p.bedrooms}</td>
          <td data-label="Bathrooms">{p.bathrooms}</td>
          <td data-label="Cars">{p.cars}</td>
          <td data-label="Area">{p.area}</td>
        </tr>
      ))}
      {properties.length === 0 && (
        <tr>
          <td colSpan="9" className="no-data">
            No properties found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div> */}

          </div>
        </div>
        {/* Pagination Controls */}
        {properties.length > 10 && (
          <div className="d-flex justify-content-center my-3 custom-pagination">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {[1, 2].map((page) => (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(2)}
              disabled={currentPage === 2}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adminrent;
