import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Adminrent.css";

const Adminrent = () => {
  const [rentData, setRentData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON server
    axios
      .get("http://localhost:3001/cards") // Make sure your JSON server is running
      .then((response) => {
        // Only take the first 22 items (if the array is longer)
        setRentData(response.data.slice(0, 22));
      })
      .catch((error) => {
        console.error("Error fetching rental data:", error);
      });
  }, []);

  return (
    <div className="adminrent-container container py-sm-4 px-sm-4 py-4 px-0" >
      <p className="adminrent-heading mb-4">For Rent Properties</p>
     <div class='ds_table_wrapper overflow-auto'>
        <table class='w-100 text-dark ds_role_table '>
          <thead>
            <tr>
               <th className="adminrent-th">Property ID</th>
              <th className="adminrent-th">Property Image</th>
              <th className="adminrent-th">Property Name</th>
              <th className="adminrent-th">Category</th>
              <th className="adminrent-th">Price</th>
             
            </tr>
          </thead>
          <tbody className="adminrent-tbody">
            {rentData.map((property) => (
              <tr key={property.id} className="adminrent-tr">
                <td className="adminrent-td">{property.id}</td>
                <td className="adminrent-td" data-label="Image">
                  <img
                    src={property.image1}
                    alt={property.title}
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </td>

                <td className="adminrent-td">{property.title}</td>
                <td className="adminrent-td">{property.category}</td>
                <td className="adminrent-td">${property.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>
  );
};

export default Adminrent;
