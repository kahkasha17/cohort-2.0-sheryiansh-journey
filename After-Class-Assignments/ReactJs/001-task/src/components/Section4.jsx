import React from "react";

const Section4 = () => {
  return (
    <div className="Section4">
      <div id="cards">
        
        
       <div
          className="card"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/469729206/photo/female-playing-tennis.webp?a=1&s=612x612&w=0&k=20&c=PJGEuLIo9OVglMpgN0j2jdtV2VW6LOU2kvUA1fsn0JQ=')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
<div
  className="card"
  style={{
    backgroundColor: "#f3d5d5a6",
    padding: "40px",
    borderRadius: "20px",
    fontFamily: "sans-serif",
    color: "#0D1A2D",
  }}
>
  {/* Services Tag */}
  <span
    style={{
      display: "inline-block",
      padding: "6px 14px",
      borderRadius: "20px",
      border: "1px solid #d1d5db",
      fontSize: "14px",
      marginBottom: "20px",
    }}
  >
    Services
  </span>

  {/* Main Text */}
  <h2
    style={{
      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "1",
      marginTop: "20px",
      marginBottom: "28px",
    }}
  >
    Explore our full range of coaching, training, and tennis experiences.
    From first serve to match point — we’ve got the right program for you.
  </h2>

  {/* Button */}
  <button
    style={{
      backgroundColor: "#0D1A2D",
      color: "#ffffff",
      padding: "14px 22px",
      borderRadius: "30px",
      border: "none",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    }}
  >
    Explore More <span>↗</span>
  </button>
</div>









         <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592709806791-cca657c04db4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section4;
