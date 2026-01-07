const Section3 = () => {
  return (
    <div
      className="Section3"
      style={{
        padding: "60px 80px",
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <p
        style={{
          fontSize: "16px",
          color: "#6b7280",
          marginBottom: "40px",
        }}
      >
        A few more facts about us in numbers
      </p>

      {/* Stats Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "32px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3 style={{ fontSize: "28px", fontWeight: "600" }}>12,000+</h3>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Hours of play yearly
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "28px", fontWeight: "600" }}>89%</h3>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Player satisfaction
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "28px", fontWeight: "600" }}>1,200+</h3>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Active members
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "28px", fontWeight: "600" }}>125+</h3>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Annual tournaments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
