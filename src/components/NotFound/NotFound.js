import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "404: This page could not be found.";
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: "2.4rem",
          fontWeight: "500",
          paddingRight: "23px",
          borderRight: "1px solid rgba(0,0,0,.3)",
        }}
      >
        404
      </span>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "300",
          marginLeft: "23px",
          lineHeight: "49px",
        }}
      >
        This page could not be found.
      </p>
    </div>
  );
}

export default NotFound;
