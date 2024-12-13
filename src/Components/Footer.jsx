// import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-around">
        <div className="feature">
          <h3>Features</h3>
          <a className="d-flex flex-column" style={{ color: "blue" }}>
            Cool Staff
          </a>
          <a className="d-flex flex-column text-secondary">Random Feature</a>
          <a className="d-flex flex-column text-secondary">Team Feature</a>
        </div>

        <div className="resource">
          <h3>Resourses</h3>
          <a className="d-flex flex-column text-secondary">Resource</a>
          <a className="d-flex flex-column text-secondary">Resource name</a>
        </div>
        <div className="about">
          <h3>About</h3>
          <a className="d-flex flex-column text-secondary">Team</a>
          <a className="d-flex flex-column text-secondary">Locations</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
