


import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom'; // ✅ Link'i import et

const { Title, Paragraph } = Typography;

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const rotatingTexts = [
    "Sistemleri anlamak kendini anlamaktır",
    "Algoritma bile seni tanıyor, sen kendini tanıyor musun?",
    "First rule of programming: If it works don't touch it ⚙️",
    "Erişim hatası mı aldın? Sudo ile kapıları zorla aç 🔓💥"
  ];

useEffect(() => {
  const interval = setInterval(() => {
    setFadeIn(false);
    setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      setFadeIn(true);
    }, 500);
  }, 3000);
  return () => clearInterval(interval);
}, [rotatingTexts.length]);


  const buttonBase = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    border: "none",
    fontWeight: 700,
    fontSize: "1.2rem",
    padding: "1.8rem 3rem",
    minWidth: "220px",
    borderRadius: "50px",
    boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
    transition: "all 0.6s ease",
    cursor: "pointer"
  };

  return (
    <div style={{
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "2rem",
      position: "relative",
      overflow: "hidden"
    }}>
      
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        top: "-100px",
        right: "-100px",
        animation: "float 6s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        bottom: "-50px",
        left: "-50px",
        animation: "float 8s ease-in-out infinite"
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        maxWidth: "900px",
        textAlign: "center",
        zIndex: 1,
        background: "rgba(255,255,255,0.95)",
        padding: "3rem",
        borderRadius: "30px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
      }}>
        {/* Ana Başlık */}
        <Title level={1} style={{
          fontSize: "3.5rem",
          fontWeight: 900,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
          fontFamily: "'Pacifico', cursive"
        }}>
          Philocodia
        </Title>

        {/* Rotating Alt Başlık */}
        <Paragraph style={{
          fontSize: "1.5rem",
          color: "#764ba2",
          fontWeight: 600,
          minHeight: "60px",
          marginBottom: "2rem",
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 0.5s ease",
          animation: fadeIn ? "fadeIn 0.5s ease" : "none"
        }}>
          {rotatingTexts[textIndex]}
        </Paragraph>

        {/* Ana Açıklama */}
        <Paragraph style={{
          fontSize: "1.2rem",
          color: "#555",
          lineHeight: "1.8",
          marginBottom: "2.5rem"
        }}>
          <strong>Kod + Felsefe + Sen.</strong>           Yazılım kavramlarını psikoloji ve felsefeyle birleştiriyoruz.  
 <strong></strong>.
        </Paragraph>

        
        <div style={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <Link to="/blog"> 
            <Button
              style={buttonBase}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 12px 30px rgba(102, 126, 234, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
              }}
            >
               Blog yazıları
            </Button>
          </Link>

          <Link to="/test"> {/* ✅ Test sayfasına link */}
            <Button
              style={{...buttonBase, background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 12px 30px rgba(245, 87, 108, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 20px rgba(245, 87, 108, 0.4)";
              }}
            >
               Testler
            </Button>
          </Link>
        </div>

        
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "3rem",
          flexWrap: "wrap"
        }}>
          
        </div>
      </div>
    </div>
  );
}




