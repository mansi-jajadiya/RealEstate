import React from "react";

const Adminrent = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0 w-100">
        {/* Header */}
        <div className="card-header bg-white border-0">
          <h5 className="mb-0">Properties</h5>
        </div>

        {/* Table */}
        <div className="card-body p-0">
          <div className="table-responsive w-100">
            <table className="table table-hover align-middle mb-0 w-100">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Added On</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Ocean View Villa</td>
                  <td>Villa</td>
                  <td>₹4,20,000</td>
                  <td>Mumbai</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>12 Jul 2025</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Downtown Loft</td>
                  <td>Apartment</td>
                  <td>₹2,10,000</td>
                  <td>Delhi</td>
                  <td>
                    <span className="badge bg-warning text-dark">Pending</span>
                  </td>
                  <td>03 Jun 2025</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Suburban Home</td>
                  <td>House</td>
                  <td>₹1,55,000</td>
                  <td>Pune</td>
                  <td>
                    <span className="badge bg-secondary">Inactive</span>
                  </td>
                  <td>28 Mar 2025</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminrent;
