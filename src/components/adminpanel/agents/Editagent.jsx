import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Addagent.css";

const Editagent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    agentname: "",
    cname: "",
    office: "",
    mobile: "",
    fax: "",
    email: "",
    location: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/ouragent/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Error fetching agent:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/ouragent/${id}`, formData);
      navigate("/admin/agent"); 
    } catch (err) {
      console.error("Error updating agent:", err);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="mb-4 add-agent-path d-flex align-items-center">
            <span className="add-span-main" style={{ cursor: "pointer" }}>
              Agents
            </span>
            <span className="add-span">/Edit Agent</span>
          </div>
          <div className="add-age-card shadow-sm p-4 rounded-3">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label add-age-name">Agent Name</label>
                  <input
                    type="text"
                    name="agentname"
                    value={formData.agentname}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Company Name</label>
                  <input
                    type="text"
                    name="cname"
                    value={formData.cname}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Office</label>
                  <input
                    type="text"
                    name="office"
                    value={formData.office}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label add-age-name">Fax</label>
                  <input
                    type="text"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label add-age-name">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label add-age-name">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control add-age-input"
                    rows="4"
                  ></textarea>
                </div>
                <div className="col-12">
                  <label className="form-label add-age-name">Agent Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="form-control add-age-input"
                  />
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Agent"
                      className="mt-2"
                      style={{ width: "100px", borderRadius: "8px" }}
                    />
                  )}
                </div>
                <div className="col-12 mt-3 text-end">
                  <button type="submit" className="btn add-age-btns px-4">
                    Update
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

export default Editagent;
