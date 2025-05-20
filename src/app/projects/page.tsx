export default function Projects() {
  const projects = [
    {
      title: "STR8N",
      description:
        "Cross platform mobile app for STR8N, allowing users to perform perspective correction on images.",
      technologies: [
        "React Native",
        "Node.js",
        "Expo",
        "OpenCV",
        "Machine Learning",
        "SKIA",
      ],
      category: "Mobile Applications",
      link: "",
    },
  ];

  return (
    <div className="container" style={{ padding: "3rem 0" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        Projects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: 12,
              padding: "1.5rem",
              transition: "box-shadow 0.2s",
              background: "#fff",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              {project.title}
            </h2>
            <p style={{ color: "#555", marginBottom: "1rem" }}>
              {project.description}
            </p>
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--accent-color)",
                }}
              >
                {project.category}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: project.link ? "1rem" : 0,
              }}
            >
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    background: "#f5f5f5",
                    color: "#444",
                    padding: "0.3rem 0.9rem",
                    borderRadius: 16,
                    fontSize: "0.95rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{
                  display: "inline-block",
                  background: "var(--accent-color)",
                  color: "var(--primary-color)",
                  padding: "0.5rem 1.2rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                  transition: "background 0.2s",
                }}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Interested in Working Together?
        </h2>
        <p style={{ marginBottom: "2rem" }}>
          Let&apos;s discuss how we can help bring your project to life.
        </p>
        <a href="/contact" className="btn">
          Contact Us
        </a>
      </div>
    </div>
  );
}
