import { Link } from "react-router-dom";

function HelloWorld() {
    return (
        <div style={styles.app}>
            <h1 style={styles.glowTitle}>Hello, World!</h1>
            <br />
            <Link to="/profile" style={styles.flyingButton}>
                Go back to profile
            </Link>
        </div>
    );
}

const styles = {
    app: {
        textAlign: "center",
        minHeight: "100vh",
        background: "#660000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    glowTitle: {
        fontSize: "3rem",
        color: "#bfa87c",
        textShadow: "0 0 10px rgba(191, 168, 124, 0.5)",
        marginBottom: "20px",
    },
    flyingButton: {
        display: "inline-block",
        padding: "12px 24px",
        borderRadius: "30px",
        background: "#bfa87c",
        color: "#660000",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "0.3s",
        margin: "10px",
        cursor: "pointer",
    }
};

export default HelloWorld;