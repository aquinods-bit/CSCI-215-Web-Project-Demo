import logo from './assets/CofC_Logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import HelloWorld from "./pages/helloWorld";  

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <MainPage />
            </PageWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/profile"
          element={
            <PageWrapper>
              <Profile />
            </PageWrapper>
          }
        />

      <Route
        path="/helloWorld"
        element={
          <PageWrapper>
            <HelloWorld />  
          </PageWrapper>
        }
      />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

function MainPage() {
  return (
    <div className="App" style={styles.app}>
      <header style={styles.header}>
        <img src={logo} style={styles.logo} alt="logo" />

        <h1 style={styles.title}>Welcome to Densel Aquino Website</h1>

        <p style={styles.text}>
          Motivated to make this site due to CSCI 215.
        </p>

        <a
          href="https://charleston.edu/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          More about CofC
        </a>

        

        <Link to="/home" style={styles.button}>
          Go to Home Page
        </Link>
      </header>
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
  header: {
    padding: "40px",
    borderRadius: "20px",
    background: "#FFFFFF",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
  logo: {
    height: "120px",
  },
  title: {
    fontSize: "2.5rem",
    margin: "20px 0",
    color: "#bfa87c"
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#bfa87c"
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "30px",
    background: "#660000",
    color: "#bfa87c",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
    margin: "10px",
  },
};

export default App;