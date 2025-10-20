



import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";
import { List, Card, Typography } from "antd";
import ReactMarkdown from "react-markdown";

const { Title, Paragraph } = Typography;

const BlogList = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
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
          fontSize: "2.5rem"
        }}
      >
        Yazılar
      </Title>

      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={posts}
        renderItem={post => (
          <List.Item>
            <Link to={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
              <Card
                hoverable
                style={{
                  border: "1px solid #f0f0f0",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease"
                }}
                bodyStyle={{ padding: "1.5rem" }}
              >
                <Title
                  level={4}
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                    color: "#273B94"
                  }}
                >
                  {post.title}
                </Title>

                <Paragraph
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.8rem",
                    color: "#666",
                    fontWeight: "500"
                  }}
                >
                  Seviye: {post.level}
                </Paragraph>

                <div
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "#444"
                  }}
                >
                  <ReactMarkdown>
                    {post.content.split("\n").slice(2, 8).join("\n") + "..."}
                  </ReactMarkdown>
                </div>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogList;
