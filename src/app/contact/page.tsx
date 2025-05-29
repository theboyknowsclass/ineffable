"use client";

import { useState } from "react";

export default function Contact() {
  const apiUrl = process.env.NEXT_PUBLIC_EMAILER_URI as string;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [response, setResponse] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Reset form
      setFormData({ name: "", email: "", company: "", message: "" });
      setResponse({
        type: "success",
        message: "Thank you for your message. We will get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        position: "relative",
      }}
    >
      {response && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "ivory",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 0 24px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>{response.message}</p>
            <button
              onClick={() => setResponse(null)}
              className="btn"
              style={{ width: "100%" }}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Contact
        </h1>
        <div>
          <label
            htmlFor="name"
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: 500,
              marginBottom: "0.5rem",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 6,
              fontSize: "1rem",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: 500,
              marginBottom: "0.5rem",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 6,
              fontSize: "1rem",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: 500,
              marginBottom: "0.5rem",
            }}
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 6,
              fontSize: "1rem",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: 500,
              marginBottom: "0.5rem",
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 6,
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>
        <button type="submit" className="btn" style={{ width: "100%" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
