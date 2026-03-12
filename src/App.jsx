import { useState, useEffect } from "react";
import AudioUploader from "./components/AudioUploader";
import ScoreResult from "./components/ScoreResult";
import TeamAvatar from "./components/TeamAvatar";
import Footer from "./components/Footer";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";



export default function App() {
  const [result, setResult] = useState(null);
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
      setTimeout(() => {
    AOS.refresh();
  }, 500);
}, []);
 
  const waveformHeights = [8,14,22,35,48,40,52,38,50,42,30,55,44,28,50,60,44,34,24,18,12,22,38,50,58,48,38,28,18,14,20,34,48,52,44,36,26,18,28,40,54,48,36,24,16,22,36,50,44,30];
  const waveformCenterIndex = (waveformHeights.length - 1) / 2;

  return (
    <>
      <nav>
        <div className="nav-logo">
          Deep<span>Steg</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#research-team">Research Team</a>
          </li>
          <li>
            <a href="#architecture">Architecture</a>
          </li>
          <li>
            <a href="#demo">Demo</a>
          </li>
          <li>
            <a href="#results">Results</a>
          </li>
        </ul>
        <a
          className="nav-cta"
          href="https://drive.google.com/file/d/1-xLE8sy97TENULNs8qrCyw8hITbFAXYF/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Read Paper
        </a>
      </nav>

      <section id="home" data-aos="fade-up">
        <div className="hero-badge">
          Deep Learning <span className="dot"></span> Audio Steganography <span className="dot"></span> LSB Scoring
        </div>
        <h1 className="hero-title">
          Intelligent <span className="highlight">Deep Learning</span>
          <br />
          Suitability Scoring for
          <br />
          <span className="accent">LSB Audio</span> Steganography
        </h1>
        <p className="hero-sub">
          An ML-powered framework that evaluates and ranks audio carriers for
          optimal LSB steganographic embedding.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#demo">
            Explore Demo
          </a>
          <a className="btn-outline" href="#architecture">
            View Architecture
          </a>
        </div>

        <div className="stats-bar">
          <div className="stat">
            <div className="stat-num">
  <CountUp end={78} duration={2} />%
</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat">
            <div className="stat-num">
  <CountUp end={30} duration={2} />dB
</div>
            <div className="stat-label">SNR Avg</div>
          </div>
          <div className="stat">
            <div className="stat-num">
  <CountUp end={21000} duration={2} separator="," />+
</div>
            <div className="stat-label">Samples</div>
          </div>
        </div>

        <div className="waveform-container">
          <div className="waveform">
            {waveformHeights.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="waveform-bar"
                style={{
                  "--h": `${height}px`,
                  animationDelay: `${Math.abs(index - waveformCenterIndex) * 0.04}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="research-team" data-aos="fade-up">
        <div className="section-inner">
          <div className="section-label">01 — Research Team</div>
          <h2 className="section-title">
            The <span className="hl">Minds</span> Behind the Research
          </h2>
          <div className="divider"></div>
          <div className="team-grid">
            <div className="team-card">
              <TeamAvatar
                name="Dilki Chamika"
                initials="DC"
                imageSrc="/images/dilki.png"
              />
              <div className="team-name">Dilki Chamika</div>
              <div className="team-role">Team leader & Researcher</div>
              <div className="team-dept">ICT/21/817</div>
            </div>
            <div className="team-card">
              <TeamAvatar
                name="Yehani Athukorala"
                initials="YA"
                imageSrc="/images/yehani.png"
              />
              <div className="team-name">Yehani Athukorala</div>
              <div className="team-role">Developer & Researcher</div>
              <div className="team-dept">ICT/21/810</div>
            </div>
            <div className="team-card">
              <TeamAvatar
                name="Bhanuka Wickramasinghe"
                initials="BW"
                imageSrc="/images/bhanuka.jpg"
              />
              <div className="team-name">Bhanuka Wickramasinghe</div>
              <div className="team-role">Developer & Researcher</div>
              <div className="team-dept">ICT/21/940</div>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" data-aos="fade-up" >
        <div className="section-inner">
          <div className="section-label">02 — System Architecture</div>
          <h2 className="section-title">
            Framework <span className="hl">Architecture</span>
          </h2>
          <p className="arch-description">
The proposed framework evaluates audio carriers using deep learning
to determine their suitability for secure LSB steganographic embedding.
</p>
          <div className="divider"></div>
          <div className="arch-diagram">
            <div className="arch-flow">
              <div className="arch-box">
                 <div className="arch-icon">🎧</div>
  <h4>Audio Input</h4>
  <p>MP3 carrier audio uploaded by user</p>
</div>

<span className="arch-arrow">→</span>

<div className="arch-box">
   <div className="arch-icon">📊</div>
  <h4>Feature Extraction</h4>
  <p>MFCC, spectral and temporal features</p>
</div>

<span className="arch-arrow">→</span>

<div className="arch-box">
  <div className="arch-icon">🧠</div>
  <h4>Deep CNN Model</h4>
  <p>Deep learning model evaluates suitability</p>
</div>

<span className="arch-arrow">→</span>

<div className="arch-box">
  <div className="arch-icon">📈</div>
  <h4>Suitability Score</h4>
  <p>Ranking of audio carrier quality</p>
</div>

<span className="arch-arrow">→</span>

<div className="arch-box">
  <div className="arch-icon">🔐</div>
  <h4>LSB Embedding</h4>
  <p>Secure message embedding in audio</p>
</div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" data-aos="fade-up" >
        <div className="section-inner">
          <div className="section-label">03 — Live Demo</div>
          <h2 className="section-title">
            Run the <span className="hl">Application</span>
          </h2>
          <div className="divider"></div>
          <div className="demo-shell">
            <AudioUploader onResult={setResult} />
            <ScoreResult result={result} />
          </div>
        </div>
      </section>

      <section id="results" data-aos="fade-up">
        <div className="section-inner">
          <div className="section-label">04 — Results & Evaluation</div>
          <h2 className="section-title">
            Performance <span className="hl">Results</span>
          </h2>
          <div className="divider"></div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">🎯</div>
              <div className="metric-label">Prediction Accuracy</div>
            <div className="metric-val">
  <CountUp end={78} duration={2}/>%
</div>


            </div>
            <div className="metric-card">
              <div className="metric-icon">🔊</div>
              <div className="metric-label">Avg Signal-to-Noise</div>
              <div className="metric-val">
  <CountUp end={30} duration={2}/>dB
</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">📦</div>
              <div className="metric-label">Embedding Capacity (bps)</div>
             <div className="metric-val">
  <CountUp end={10240} duration={2}/>
</div>
            </div>
          </div>
        </div>
      </section>

    <Footer />

    </>
  );
}
