import React from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";
import { test } from "../data/test";

const { Title, Paragraph } = Typography;

const TestLibrary = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          background: "linear-gradient(135deg, #273B94 0%, #240D3B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700,
          fontFamily: "'Pacifico', cursive",
          fontSize: "2.5rem",
        }}
      >
        🎯 Test Kütüphanesi
      </Title>

      <Paragraph
        style={{
          fontSize: "1.1rem",
          color: "#666",
          marginBottom: "2.5rem",
        }}
      >
        Felsefi testlerden birini seç ve <strong>kendini keşfet!</strong> 🧠
      </Paragraph>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {test.map((t) => (
          <Link
            key={t.id}
            to={`/test/${t.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              hoverable
              style={{
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease",
                height: "100%",
                border: "1px solid #f0f0f0",
              }}
              bodyStyle={{ padding: "1.8rem" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(39, 59, 148, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(0, 0, 0, 0.08)";
              }}
            >
              <Title
                level={4}
                style={{
                  color: "#273B94",
                  marginBottom: "0.5rem",
                }}
              >
                {t.emoji} {t.title}
              </Title>
              <Paragraph
                style={{
                  color: "#555",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {t.description}
              </Paragraph>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestLibrary;
