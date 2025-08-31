// Addagent.js
import React, { useState } from "react";
import "./Addagent.css";
import { useNavigate } from "react-router-dom";

const Addagent = () => {
  const [formData, setFormData] = useState({
    image: null,
    agentname: "",
    cname: "",
    office: "",
    mobile: "",
    fax: "",
    email: "",
    location: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Agent form submitted! Check console for data.");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          {/* Breadcrumb / Path */}
          <div className="mb-4 add-agent-path d-flex align-items-center">
            <span
              className="add-span-main"
              onClick={() => navigate("/admin/agent")}
              style={{ cursor: "pointer" }}
            >
              Agents
            </span>
            <span className="add-span">/Add Agent</span>
          </div>

          {/* Form */}
          <div className="card shadow-sm p-4 rounded-3">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Agent Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="agentname"
                    placeholder="Michelle Ramirez"
                    value={formData.agentname}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cname"
                    placeholder="Company Agent at Realtory Inc."
                    value={formData.cname}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Office</label>
                  <input
                    type="text"
                    className="form-control"
                    name="office"
                    placeholder="789 456 3210"
                    value={formData.office}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    placeholder="321 456 9874"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Fax</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fax"
                    placeholder="897 654 1258"
                    value={formData.fax}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="michelle@houzez.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="New York, USA"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="4"
                    placeholder="Enter agent description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-12">
                  <label className="form-label">Agent Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mt-3 text-end">
                  <button type="submit" className="btn btn-primary px-4">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addagent;
