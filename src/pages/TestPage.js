import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Progress, Typography } from "antd";
import { test } from "../data/test";

const { Title, Paragraph } = Typography;

const TestPage = () => {
  const { id } = useParams();
  const currentTest = test.find((t) => t.id === parseInt(id));
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  if (!currentTest) return <h1>Test bulunamadı 😢</h1>;

  const handleAnswer = (index) => {
    
    setSelectedOption(index);
  };

  const nextQuestion = () => {
    if (selectedOption === null) return; // Seçim yapılmadan geçemez
    
    const optionScore = currentTest.questions[currentQ].options[selectedOption].score;
    const newScore = score + optionScore;

    if (currentQ + 1 < currentTest.questions.length) {
      setScore(newScore);
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
    } else {
      let finalResult;
      if (newScore <= 15) finalResult = currentTest.results.low;
      else if (newScore >= 18) finalResult = currentTest.results.high;
      else finalResult = currentTest.results.mid;

      setResult({ ...finalResult, totalScore: newScore });
    }
  };

  const progress = ((currentQ + (selectedOption !== null ? 1 : 0)) / currentTest.questions.length) * 100;

  if (result) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", textAlign: "center" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "1rem", background: "linear-gradient(135deg, #273B94 0%, #240D3B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700, fontFamily: "'Pacifico', cursive", fontSize: "2.5rem" }}>
          {currentTest.emoji} {currentTest.title}
        </Title>

        <Card style={{ border: "1px solid #f0f0f0", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", marginBottom: "2rem" }} bodyStyle={{ padding: "2rem" }}>
          <Title level={3} style={{ color: "#273B94", marginBottom: "1rem" }}>{result.label}</Title>
          <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444", marginBottom: "1.5rem", whiteSpace: "pre-line" }}>{result.desc}</Paragraph>
          <Paragraph style={{ color: "#666", fontSize: "1rem" }}>Toplam Puanın: <strong style={{ color: "#273B94" }}>{result.totalScore}</strong> / {currentTest.questions.length * 3}</Paragraph>
        </Card>

        <Button type="primary" size="large" style={{ backgroundColor: "#273B94", border: "none", borderRadius: "8px", fontWeight: "600", padding: "0 2rem", height: "40px", marginBottom: "1rem" }} onClick={() => window.location.reload()}>
          Testi Tekrarla
        </Button>
      </div>
    );
  }

  const question = currentTest.questions[currentQ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "1rem", background: "linear-gradient(135deg, #273B94 0%, #240D3B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700, fontFamily: "'Pacifico', cursive", fontSize: "2.5rem" }}>
        {currentTest.emoji} {currentTest.title}
      </Title>

      <Paragraph style={{ textAlign: "center", fontSize: "1.1rem", color: "#666", marginBottom: "2rem" }}>{currentTest.description}</Paragraph>

      <Progress percent={progress} showInfo={false} strokeColor="#273B94" style={{ marginBottom: "2rem" }} />

      <Card style={{ border: "1px solid #f0f0f0", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} bodyStyle={{ padding: "2rem" }}>
        <Paragraph style={{ textAlign: "center", fontSize: "1rem", color: "#273B94", fontWeight: "600", marginBottom: "1rem" }}>
          Soru {currentQ + 1}/{currentTest.questions.length}
        </Paragraph>

        <Title level={4} style={{ fontSize: "1.3rem", color: "#333", textAlign: "center", marginBottom: "2rem", lineHeight: "1.5" }}>
          {question.text}
        </Title>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {question.options.map((opt, index) => (
            <Button
              key={index}
              block
              size="large"
              onClick={() => handleAnswer(index)}
              style={{
                backgroundColor: selectedOption === index ? "#273B94" : "#F8F9FF",
                color: selectedOption === index ? "white" : "#273B94",
                border: selectedOption === index ? "2px solid #273B94" : "2px solid #E8ECFF",
                borderRadius: "8px",
                fontWeight: "500",
                height: "auto",
                padding: "1rem",
                textAlign: "left",
                whiteSpace: "normal",
                minHeight: "60px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (selectedOption !== index) {
                  e.currentTarget.style.backgroundColor = "#EEF1FF";
                  e.currentTarget.style.borderColor = "#273B94";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedOption !== index) {
                  e.currentTarget.style.backgroundColor = "#F8F9FF";
                  e.currentTarget.style.borderColor = "#E8ECFF";
                }
              }}
            >
              {opt.text}
            </Button>
          ))}
        </div>

        {selectedOption !== null && (
          <Button 
            type="primary" 
            size="large"
            block
            style={{ 
              marginTop: "1.5rem", 
              backgroundColor: "#273B94", 
              border: "none", 
              borderRadius: "8px",
              fontWeight: "600",
              height: "48px"
            }} 
            onClick={nextQuestion}
          >
            {currentQ + 1 === currentTest.questions.length ? "Sonucu Göster" : "Sonraki Soru →"}
          </Button>
        )}
      </Card>
    </div>
  );
};

export default TestPage;