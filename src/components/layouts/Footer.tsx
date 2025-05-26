const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Society Financial Management
      </p>
    </footer>
  );
};
export default Footer;
