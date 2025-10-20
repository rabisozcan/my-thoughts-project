import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, FloatButton } from "antd";
import { ReadOutlined, BookOutlined, TeamOutlined, RocketOutlined } from "@ant-design/icons";

import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Hakkimda from "./pages/Hakkimda";
import Iletisim from "./pages/Iletisim"; 
import TestLibrary from "./pages/TestLibrary";
import TestPage from "./pages/TestPage";

const { Content, Footer } = Layout;
const { Title, Text } = Typography;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const lightTheme = {
    background: "linear-gradient(135deg, #f8f0ff, #e0e9f5)",
    headerBackground: "rgba(255, 255, 255, 0.6)",
    textColor: "#2c3e50",
    contentBackground: "rgba(255, 255, 255, 0.6)",
    footerBackground: "rgba(44, 62, 80, 0.6)",
    footerText: "white"
  };

  const darkTheme = {
    background: "#153354FF",
    headerBackground: "#465E75FF",
    textColor: "#f0f0f0",
    contentBackground: "#465E75FF",
    footerBackground: "#26323CFF",
    footerText: "#e0e0e0"
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Router>
      <Layout style={{ minHeight: "100vh", background: theme.background, position: "relative" }}>
        
        
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem 1rem 1rem 1rem", 
            background: theme.headerBackground,
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)", 
            position: "relative",
            overflow: "hidden"
          }}
        >
          <button
            onClick={toggleTheme}
            style={{
              position: "absolute",
              top: "0.5rem", 
              right: "0.5rem",
              background: "none",
              border: "1px solid #ccc",
              borderRadius: "50%",
              width: "35px", 
              height: "35px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem"
            }}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Title
              level={1}
              style={{
                color: theme.textColor,
                fontFamily: "'Merriweather', serif",
                fontWeight: 700,
                fontSize: "2.5rem", 
                marginBottom: "0.2rem", 
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}
            >
              Philocodia
            </Title>
          </Link>

          
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem", 
            flexWrap: "wrap",
            marginTop: "1rem" 
          }}>
            {[
              { icon: <ReadOutlined />, text: "Blog Yazıları", path: "/blog", color: "#e74c3c" },
              { icon: <BookOutlined />, text: "Testler", path: "/test", color: "#3498db" },
              { icon: <TeamOutlined />, text: "Hakkımda", path: "/about", color: "#2ecc71" },
              { icon: <RocketOutlined />, text: "İletişim", path: "/iletisim", color: "#9b59b6" }
            ].map((item, index) => (
              <Link key={index} to={item.path} style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "1rem 1.5rem",
                  background: "rgba(255,255,255,0.6)",
                  borderRadius: "12px", 
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)", 
                  transition: "all 0.3s ease",
                  border: `2px solid ${item.color}20`,
                  minWidth: "120px", 
                  textAlign: "center",
                  backdropFilter: "blur(10px)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)"; 
                  e.currentTarget.style.boxShadow = `0 4px 15px ${item.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
                }}>
                  <div style={{ fontSize: "1.5rem", color: item.color, marginBottom: "0.3rem" }}>
                    {item.icon}
                  </div>
                  <Text strong style={{ color: theme.textColor, fontSize: "0.9rem" }}>{item.text}</Text>
                </div>
              </Link>
            ))}
          </div>
        </div>

        
        <Content
          style={{
            padding: "1rem 1rem", 
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            flex: 1
          }}
        >
          <div style={{
            background: theme.contentBackground,
            borderRadius: "15px", 
            padding: "2rem", 
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)", 
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            color: theme.textColor,
            minHeight: "calc(100vh - 300px)" 
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/about" element={<Hakkimda />} />
              <Route path="/iletisim" element={<Iletisim />} />
              <Route path="/test" element={<TestLibrary />} />
              <Route path="/test/:id" element={<TestPage />} />
            </Routes>
          </div>
        </Content>

        
        <Footer
          style={{
            textAlign: "center",
            background: theme.footerBackground,
            color: theme.footerText,
            padding: "1.5rem 1rem", 
            borderTop: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            fontSize: "0.9rem" 
          }}
        >
          © 2025 Philocodia — Rabia Özcan 
        </Footer>

        
        <FloatButton
          shape="circle"
          style={{ right: 24, bottom: 24 }}
          icon={<RocketOutlined />}
          tooltip="Yukarı Çık"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </Layout>
    </Router>
  );
}

export default App;


