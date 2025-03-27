import React from "react";
import { FaWifi, FaExclamationTriangle } from "react-icons/fa";

const Offline = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
        }}
      >
        <FaWifi
          style={{
            fontSize: "48px",
            color: "#dc3545",
            marginBottom: "20px",
          }}
        />
        <h2
          style={{
            margin: "0 0 15px",
            fontSize: "24px",
            color: "#dc3545",
          }}
        >
          You're Offline
        </h2>
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#666",
          }}
        >
          It seems like your internet connection is down. Please check your
          network and try again.
        </p>
        <FaExclamationTriangle
          style={{
            fontSize: "24px",
            color: "#ffc107",
            verticalAlign: "middle",
            marginRight: "8px",
          }}
        />
        <span
          style={{
            fontSize: "14px",
            color: "#666",
          }}
        >
          No Internet Connection
        </span>
      </div>
    </div>
  );
};

export default Offline;
