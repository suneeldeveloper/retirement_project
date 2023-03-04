import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./updatedata.css";

const UpdateData = () => {
  return (
    <>
      <Navbar data="LOGOUT" />
      <section className="update_container">
        <h3>UPDATE DATA</h3>
        <input
          type="file"
          placeholder="Upload OR Drag File Here"
          className="update_feild"
        />
        <button className="update_btn">UPLOAD</button>
        <p>Only Excel .xlsx File</p>
        <br />
        <div className="filter">
          <div className="filter_feilds">
            <button className="secondary_btn active">Fulter One</button>
            <button className="secondary_btn">Fulter One</button>
            <button className="secondary_btn">Fulter One</button>
            <button className="secondary_btn">Fulter One</button>
          </div>
        </div>

        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th width="10%">S.NO:</th>
                <th width="20%">Retire ID:</th>
                <th width="40%">Name:</th>
                <th width="30%">Social security Number:</th>
              </tr>
            </thead>

        <tbody>
        <tr>
              <th>01</th>
              <th>673627362</th>
              <th>Mr. John Doe XYZ ABCD </th>
              <th>9474748473</th>
            </tr>
           

            <tr height="400px">
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
        </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UpdateData;
