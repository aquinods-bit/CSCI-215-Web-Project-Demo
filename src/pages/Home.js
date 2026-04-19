
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="App" style={styles.app}>
        <h1 className="glow-title" >This is the Home page...</h1>
        <br></br>

        <Link to="/profile" className="flying-button">
          Go to the real profile page
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
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      },

     

  };
  
  export default Home;