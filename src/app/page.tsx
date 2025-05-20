export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "64rem",
      }}
    >
      <h1
        style={{
          fontSize: "4.5rem",
          fontWeight: "bold",
          marginBottom: "0rem",
          marginTop: "4rem",
        }}
      >
        Ineffable
      </h1>
      <div style={{ marginBottom: "2rem" }}>
        <p
          style={{
            fontSize: "1.25rem",
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          /ɪnˈɛfəb(ə)l/
        </p>
        <p style={{ fontSize: "1.125rem", marginBottom: "4rem" }}>
          That cannot be expressed or described in language; too great for
          words; transcending expression; unspeakable, unutterable,
          inexpressible.
        </p>
        <p style={{ fontSize: "2rem", fontWeight: 300 }}>
          a software consultancy
        </p>
      </div>
    </div>
  );
}
