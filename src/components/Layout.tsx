import React from "react";

export const Navbar = ({ isLoggedIn, onLogout }: any) => {
  return (
    <nav
      style={{
        height: 80,
        background: "#0f172a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <h2>ZeroBuild.AI</h2>
      {isLoggedIn && <button onClick={onLogout}>Logout</button>}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#aaa",
        textAlign: "center",
        padding: 20,
      }}
    >
      © 2026 ZeroBuild.AI
    </footer>
  );
};
