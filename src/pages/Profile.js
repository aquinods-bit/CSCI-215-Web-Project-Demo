import React, { useState } from "react";
import profilePic from '../assets/profilePic.jpg';
import { Link } from "react-router-dom";

function Profile() {
  const [currentVideo, setCurrentVideo] = useState("FDmsVI5vaQQ"); // Your first video as default

  // Your playlist with your actual videos
  const playlist = [
    { 
      id: "FDmsVI5vaQQ", 
      title: "TwistSample 018", 
      artist: "Okijge",
    },
    { 
      id: "uhQUp3Zap3M", 
      title: "TwistSample 012", 
      artist: "Okijge",
    },
    { 
      id: "CtDMuy3S4M0", 
      title: "TwistSample 003", 
      artist: "Okijge",
    },
    { 
      id: "TkZgQ8u8p7U", 
      title: "TwistSample 009", 
      artist: "Okijge",
    },
  ];

  const handleVideoChange = (videoId) => {
    setCurrentVideo(videoId);
  };

  return (
    <div style={styles.container}>
      
      {/* Main Content Area with Two Columns */}
      <div style={styles.mainContent}>
        {/* Left Column - Profile Info */}
        <div style={styles.leftColumn}>
          <div style={styles.header}>
            <img src={profilePic} alt="profile" style={styles.avatar} />
            <h1 className="glow-title">Densel Aquino</h1>
          </div>

          {/* Info Section */}
          <div style={styles.info}>
          <p><strong>Email:</strong> aquinods@g.cofc.edu</p>
          <p><strong>Major:</strong> Computing In The Arts: Digital Media</p>
    </div>

          {/* Extra Content */}
          <div style={styles.section}>
            <h2>Things to know about me!</h2>
            <ul>
              <li>Filipino American</li>
              <li>Date of Birth: 08/02/04</li>
              <li>I have three cats!</li>
              <li>Love making games and making animation</li>
            </ul>
          </div>

          {/* Extra Content */}
          <div style={styles.section}>
            <h2>Knowledgeable Programming Languages</h2>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript/JAVA</li>
              <li>TypeScript</li>
              <li>C#/C+</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Examples */}
          <div style={styles.section}>
            <h2>Examples For Project</h2>
            <ul>
            <li><Link to="/helloWorld">Hello, world!</Link></li>
            </ul>
          </div>

          {/* Examples */}
          <div style={styles.section}>
            <h2>Link to other sources</h2>
            <ul>
              <li>Itch.io : </li>
              <li>GitHub : </li>
              <li>YouTube : </li>
            </ul>
          </div>
        </div>

        {/* Right Column - YouTube Player */}
        <div style={styles.rightColumn}>
          <div style={styles.musicPlayer}>
            <h2 style={styles.musicTitle}>Videos about my Game</h2>
            
            {/* Current Playing Info */}
            <div style={styles.nowPlaying}>
              <p style={styles.nowPlayingText}>
                <strong>Now Playing:</strong> {playlist.find(v => v.id === currentVideo)?.title || "Select a video"}
              </p>
            </div>

            {/* YouTube Video Player */}
            <div style={styles.videoContainer}>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.videoPlayer}
              ></iframe>
            </div>

            {/* Playlist */}
            <div style={styles.playlistSection}>
              <h3 style={styles.playlistTitle}>Visuals For My Game</h3>
              <div style={styles.playlist}>
                {playlist.map((video) => (
                  <div 
                    key={video.id}
                    onClick={() => handleVideoChange(video.id)}
                    style={{
                      ...styles.playlistItem,
                      ...(currentVideo === video.id && styles.activePlaylistItem)
                    }}
                  >
                    <div style={styles.playlistInfo}>
                      <span style={styles.playIcon}>
                        {currentVideo === video.id ? "▶️" : "📹"}
                      </span>
                      <div style={styles.videoInfo}>
                        <div style={styles.videoTitle}>{video.title}</div>
                        <div style={styles.videoArtist}>{video.artist}</div>
                      </div>
                    </div>
                    {currentVideo === video.id && (
                      <span style={styles.nowPlayingBadge}>Now Playing</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#660000",
    color: "white",
    padding: "20px",
  },
  
  mainContent: {
    display: "flex",
    gap: "30px",
    maxWidth: "1400px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  
  leftColumn: {
    flex: "1",
    minWidth: "300px",
  },
  
  rightColumn: {
    flex: "1",
    minWidth: "400px",
  },
  
  musicPlayer: {
    background: "#bfa87c",
    borderRadius: "10px",
    padding: "20px",
    position: "sticky",
    top: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },
  
  musicTitle: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#660000",
    textAlign: "center",
    fontWeight: "bold",
  },
  
  nowPlaying: {
    background: "#660000",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
    textAlign: "center",
    border: "1px solid #bfa87c",
  },
  
  nowPlayingText: {
    margin: 0,
    fontSize: "14px",
    color: "#bfa87c",
  },
  
  videoContainer: {
    position: "relative",
    width: "100%",
    marginBottom: "20px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
  
  videoPlayer: {
    borderRadius: "10px",
    display: "block",
    width: "100%",
    height: "auto",
    minHeight: "250px",
  },
  
  playlistSection: {
    marginTop: "20px",
  },
  
  playlistTitle: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#660000",
    fontWeight: "bold",
  },
  
  playlist: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  
  playlistItem: {
    background: "rgba(102, 0, 0, 0.1)",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
  },
  
  activePlaylistItem: {
    background: "rgba(102, 0, 0, 0.2)",
    border: "1px solid #660000",
    transform: "translateX(5px)",
  },
  
  playlistInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
  },
  
  playIcon: {
    fontSize: "18px",
  },
  
  videoInfo: {
    flex: 1,
  },
  
  videoTitle: {
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "3px",
    color: "#660000",
  },
  
  videoArtist: {
    fontSize: "11px",
    opacity: 0.7,
    color: "#660000",
  },
  
  nowPlayingBadge: {
    background: "#660000",
    color: "#bfa87c",
    padding: "3px 6px",
    borderRadius: "4px",
    fontSize: "9px",
    fontWeight: "bold",
  },
  
  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
    padding: "20px",
    background: "rgba(191, 168, 124, 0.1)",
    borderRadius: "10px",
    borderLeft: "4px solid #bfa87c",
  },
  
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "3px solid #bfa87c",
    transition: "transform 0.3s ease",
    ':hover': {
      transform: "scale(1.05)",
    }
  },
  
  // Info section with #bfa87c accent
  info: {
    marginTop: "20px",
    padding: "20px",
    background: "rgba(191, 168, 124, 0.1)",
    borderRadius: "10px",
    borderLeft: "4px solid #bfa87c",
    transition: "all 0.3s ease",
    ':hover': {
      background: "rgba(191, 168, 124, 0.2)",
      transform: "translateX(5px)",
    }
  },
  
  // Section styling with alternating backgrounds
  section: {
    marginTop: "20px",
    padding: "20px",
    background: "rgba(191, 168, 124, 0.1)",
    borderRadius: "10px",
    borderLeft: "4px solid #bfa87c",
    transition: "all 0.3s ease",
    ':hover': {
      background: "rgba(191, 168, 124, 0.2)",
      transform: "translateX(5px)",
    }
  },
  
  // Different background for alternating sections
  sectionAlt: {
    marginTop: "20px",
    padding: "20px",
    background: "rgba(102, 0, 0, 0.3)",
    borderRadius: "10px",
    borderRight: "4px solid #bfa87c",
    transition: "all 0.3s ease",
    ':hover': {
      background: "rgba(102, 0, 0, 0.4)",
      transform: "translateX(5px)",
    }
  },
  
  actions: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  },
  
  // Button styling
  button: {
    background: "#bfa87c",
    color: "#660000",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    ':hover': {
      background: "#660000",
      color: "#bfa87c",
      transform: "translateY(-2px)",
    }
  },
  
  // Link styling for your sources section
  link: {
    color: "#bfa87c",
    textDecoration: "none",
    transition: "all 0.3s ease",
    ':hover': {
      color: "#660000",
      textDecoration: "underline",
      paddingLeft: "5px",
    }
  },
  
  // Skill badges
  skillBadge: {
    background: "#bfa87c",
    color: "#660000",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    display: "inline-block",
    margin: "5px",
    transition: "all 0.3s ease",
    ':hover': {
      transform: "scale(1.05)",
      background: "#660000",
      color: "#bfa87c",
    }
  },
};

export default Profile;