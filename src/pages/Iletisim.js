import React from "react";
import { Typography, Input, Button, Form } from "antd";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const BirlikteDusunelim = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { name, subject, message } = values;
    const mailtoLink = `mailto:r3ozcan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Merhaba Rabia,\n\n${message}\n\nGönderen: ${name}`)}`;

    window.location.href = mailtoLink;
    form.resetFields();
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        background: "rgba(255,255,255,0.6)",
        borderRadius: "15px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #273B94FF 0%, #240D3BFF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700,
          fontFamily: "'Pacifico', cursive",
          fontSize: "2.5rem",
        }}
      >
        Birlikte Düşünelim
      </Title>

      <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        🌈 Philocodia sadece benim düşüncelerimden ibaret olmasın — senin fikirlerinle de büyüsün.  
        💭 Aklına takılan bir soru merak ettiğin bir kavram veya “bunu da yazmalısın” dediğin bir konu varsa duymak isterim.
      </Paragraph>

      <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Sıradaki blog hangi konuda olmalı? <br />
        Hangi kavramın gerçek hayattaki karşılığını inceleyelim?
      </Paragraph>

      <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Düşüncelerini paylasmak için: <br />
        📩 <a href="mailto:r3ozcan@gmail.com">r3ozcan@gmail.com</a>
      </Paragraph>

      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Adın"
          name="name"
          rules={[{ required: true, message: "Lütfen adını gir!" }]}
        >
          <Input placeholder="Adını yaz..." />
        </Form.Item>

        <Form.Item
          label="Konu / Fikir"
          name="subject"
          rules={[{ required: true, message: "Lütfen konuyu yaz!" }]}
        >
          <Input placeholder="Mesajın konusu veya fikrin..." />
        </Form.Item>

        <Form.Item
          label="Mesajın"
          name="message"
          rules={[{ required: true, message: "Lütfen mesajını yaz!" }]}
        >
          <TextArea rows={5} placeholder="Mesajını buraya yaz..." />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", padding: "0.8rem 0", fontSize: "1rem" }}
          >
            İletini gönder 📨
          </Button>
        </Form.Item>
      </Form>

      <Paragraph
        style={{
          fontSize: "0.95rem",
          color: "#555",
          marginTop: "2rem",
          fontStyle: "italic",
        }}
      >
        Her mail yeni bir yazının ilhamı olabilir🧚🏻‍♀️
      </Paragraph>
    </div>
  );
};

export default BirlikteDusunelim;
