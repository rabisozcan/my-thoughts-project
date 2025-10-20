import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Hakkimda = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        background: "rgba(255,255,255,0.6)", // İçerik arka planı
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
        Hakkımda
      </Title>

      <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Selam, ben Rabia.  
        "Peki bu bilgi gerçek hayatta ne işime yarayacak?" sorusunu sık sık soran bir bilgisayar mühendisiyim.  
        Soyut kavramlar beni hiçbir zaman tam olarak tatmin etmedi.  
        Çünkü bir şey öğreniyorsam onun mutlaka hayatta bir karşılığı olsun isterim.  
        İşte bu yüzden <strong>Philocodia</strong> doğdu.
      </Paragraph>

      <div
        style={{
          background: "linear-gradient(135deg, #F1B5F8FF 0%, #E96D7EFF 100%)",
          padding: "1.5rem",
          borderRadius: "15px",
          color: "white",
          textAlign: "center",
          marginBottom: "2rem"
        }}
      >
        <strong>Philocodia:</strong> Yunanca "sevgi" anlamına gelen "philo" ve "kod" kelimelerinin birleşiminden geliyor.
      </div>

      <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Burada sana doğrular sunmuyorum, kesin cevaplar da vermiyorum.  
        Aksine, seninle birlikte sorular soruyorum.  
        Çünkü asıl cevapları dışarıda değil içimizde bulacağımıza inanıyorum.  
        Her yazı kendi düşünce yolculuğumdan bir parça, bir gün fark ettiğim bir detay, bir gece kafa yorduğum bir soru.
      </Paragraph>

      <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Amacım sistemleri anlamak - hem yazılım sistemlerini hem de kendi hayat sistemimizi.  
        Eğer sen de düşünmeyi, sorgulamayı ve fark etmeyi seven biriysen, hoş geldin.
      </Paragraph>

      <Paragraph
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          fontStyle: "italic",
          marginTop: "1.5rem",
        }}
      >
        Burayı okuyunca belki:
        <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          <li>bir kararını daha bilinçli alırsın</li>
          <li>bir problemi farklı görürsün</li>
          <li>merak ettiğin sorulara cevap bulursun</li>
          <li>en kötü ihtimalle test çözerken keyif alırsın</li>
        </ul>
      </Paragraph>
    </div>
  );
};

export default Hakkimda;
