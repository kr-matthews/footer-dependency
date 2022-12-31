import React from "react";

export default function WithHeavyFooter({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 18px)",
      }}
    >
      {children}
    </div>
  );
}

export function Body({ children }) {
  return (
    <div
      style={{
        flex: "1 0 auto",
      }}
    >
      {children}
    </div>
  );
}

export function HeavyFooter({ children }) {
  return (
    <div
      style={{
        flexShrink: 0,
        textAlign: "center",
        paddingTop: "10px",
      }}
    >
      {children}
    </div>
  );
}
