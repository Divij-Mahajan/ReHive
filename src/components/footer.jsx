import React from "react";

const Footer = () => {
  const footerStyle = {
    width: "100%",
    backgroundColor: "#1a1a1a",  // Darker background color
    color: "#bbb",
    paddingTop: "30px",
    paddingBottom: "30px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",  // Align logo and text horizontally
    justifyContent: "center",  // Center them horizontally
    marginBottom: "20px",
  };

  const logoStyle = {
    width: "50px",  // Adjust the width of the logo as needed
    height: "auto", // Maintain aspect ratio
    marginRight: "10px",  // Space between logo and text
  };

  const headingStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "20px",  // Increased marginBottom to create space
  };

  const columnContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "800px",
    marginBottom: "20px",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
  };

  const linkStyle = {
    color: "#bbb",
    textDecoration: "none",
    marginBottom: "10px",
    transition: "color 0.3s",
    fontWeight: "bold",  // Bold the links
  };

  const linkHoverStyle = {
    color: "#fff", // Lighter color on hover
  };

  const socialIconsContainer = {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  };

  const socialIconStyle = {
    color: "#bbb",
    marginRight: "15px",
    fontSize: "2em",  // Increased icon size
    transition: "transform 0.3s",
  };

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",  // Increased marginTop to push form lower
    maxWidth: "400px",  // Increased width
    width: "100%",
  };

  const inputStyle = {
    backgroundColor: "#333",
    color: "#d1d2d2",
    padding: "0.7em 1em",
    marginBottom: "10px",
    border: "none",
    borderRadius: "4px",
    width: "100%",  // Set width to 100% of form container
  };

  const textAreaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "100px",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#bbb",
    border: "1px solid #bbb",
    padding: "0.7em 2em",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoContainerStyle}>
          <img src="/logo.png" alt="ReHive Logo" style={logoStyle} />
          <h2 style={headingStyle}>ReHive</h2>
        </div>

        <div style={columnContainerStyle}>
          <ul style={listStyle}>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Product</a></li>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Benefits</a></li>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Partners</a></li>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Team</a></li>
          </ul>
          <ul style={listStyle}>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Documentation</a></li>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Support</a></li>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Legal Terms</a></li>
            <li><a href="" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>About</a></li>
          </ul>
        </div>

        <div style={socialIconsContainer}>
          <a href="" style={socialIconStyle}><i className="fab fa-facebook hover:scale-125 duration-200"></i></a>
          <a href="" style={socialIconStyle}><i className="fab fa-twitter hover:scale-125 duration-200"></i></a>
          <a href="" style={socialIconStyle}><i className="fab fa-linkedin hover:scale-125 duration-200"></i></a>
          <a href="" style={socialIconStyle}><i className="fab fa-instagram hover:scale-125 duration-200"></i></a>
        </div>

        <div style={formContainerStyle}>
          <h5 style={headingStyle}>Contact Us</h5>
          <input type="email" placeholder="Enter email" style={inputStyle} />
          <textarea placeholder="Message" style={textAreaStyle}></textarea>
          <button type="button" style={buttonStyle}>Send</button>
        </div>
        
        <p style={{ color: "#bbb", marginTop: "20px" }}>© {new Date().getFullYear()} ReHive. All rights reserved.</p>
      </div>
    </footer>
  ); 
};

export default Footer;


