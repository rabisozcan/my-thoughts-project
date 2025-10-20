import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import { Card, Typography, Button } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const { Title, Paragraph } = Typography;

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => parseInt(p.id) === parseInt(id));

  // Sayfa yüklendiğinde scroll'u en üste alalım
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // id değiştiğinde çalışacak burası yani her blog açıldığında

  if (!post) return <p>Yazı bulunamadı.</p>;

  return (
    <div style={{ padding: "1rem", maxWidth: "900px", margin: "0 auto" }}>
      <Card 
        bordered={false} 
        style={{ 
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)", 
          borderRadius: "12px", 
          backgroundColor: "#E6F0F9FF" 
        }}
      >
        <Title style={{ color: "#42336AFF" }}>{post.title}</Title>
        <Paragraph type="secondary" style={{ fontStyle: "italic" }}>Seviye: {post.level}</Paragraph>
        
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <Title level={2} style={{ color: "#6b5b95", marginTop: "1.5rem" }} {...props} />,
            h2: ({node, ...props}) => <Title level={4} style={{ color: "#280729FF", marginTop: "1rem" }} {...props} />,
            p: ({node, ...props}) => <Paragraph style={{ lineHeight: "1.7", fontSize: "1rem" }} {...props} />,
            code: ({node, inline, className, children, ...props}) => {
              if (inline) {
                return <code style={{ backgroundColor: "#f5f5f5", padding: "2px 4px", borderRadius: "4px" }}>{children}</code>;
              }
              return (
                <pre style={{
                  background: "#CEDCEEFF",
                  padding: "1rem",
                  borderRadius: "6px",
                  overflowX: "auto",
                  margin: "1rem 0",
                  fontFamily: "Courier, monospace"
                }}>
                  {children}
                </pre>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>

        <Link to="/blog">
          <Button type="primary" style={{ marginTop: "1.5rem", backgroundColor: "#1A5A51FF", borderColor: "#16413BFF" }}>Geri Dön</Button>
        </Link>
      </Card>
    </div>
  );
};

export default BlogPost;
