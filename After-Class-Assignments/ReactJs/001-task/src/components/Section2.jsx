import React from "react";

const Section2 = () => {
  return (
    <div className="Section2">
      <div id="cards">
        <div
          className="card"
          style={{
            backgroundColor: "#0D1A2D",
            padding: "2rem",
            borderRadius: "16px",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "28px" }}>🎾</span>
          </div>

          <div>
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "500",
                marginBottom: "14px",
                textTransform: "capitalize",
                lineHeight: "1.3",
              }}
            >
              Professional hard courts
            </h1>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                color: "#9AA4B2",
              }}
            >
              with tournament-grade lighting &amp; climate control —
              <br />
              play in{" "}
              <span style={{ color: "#ffffff", fontWeight: "500" }}>
                perfect conditions
              </span>
              ,
              <br />
              in any season.
            </p>
          </div>

          <div
            style={{
              marginTop: "24px",
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "28px",
                backgroundColor: "#2DA8FF",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "3px",
                  left: "26px",
                }}
              ></div>
            </div>

            <span style={{ color: "#8FA0B5", fontSize: "15px" }}>
              Game Mode
            </span>
          </div>
        </div>

        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1663013290646-8ac5f5caa0d3?q=80&w=870&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* <div
          className="card"
          style={{
            backgroundColor: "#F6F8FC",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Section2;
