import React from 'react';
import './box.css'

const index = (props) => {
  return (
    <div>
      <div className="box">
        <div className="feilds">
          <h3 className="title">Retire ID:</h3>
          <p className="detail">{props.id}</p>
        </div>
        <div className="feilds">
          <h3 className="title">Name:</h3>
          <p className="detail">{props.title}</p>
        </div>
        <div className="feilds">
          <h3 className="title">Retire ID:</h3>
          <p className="detail">34, 5436</p>
        </div>

      </div>
    </div>
  );
}

export default index;
