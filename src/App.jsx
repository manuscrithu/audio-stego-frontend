import { useState } from "react";
import AudioUploader from "./components/AudioUploader";
import ScoreResult from "./components/ScoreResult";
import TeamAvatar from "./components/TeamAvatar";
import "./index.css";

export default function App() {
  const [result, setResult] = useState(null);
  const waveformHeights = [8,14,22,35,48,40,52,38,50,42,30,55,44,28,50,60,44,34,24,18,12,22,38,50,58,48,38,28,18,14,20,34,48,52,44,36,26,18,28,40,54,48,36,24,16,22,36,50,44,30];

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
          href="https://example.com/research-paper"
          target="_blank"
          rel="noreferrer"
        >
          Read Paper
        </a>
      </nav>

      <section id="home">
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
            <div className="stat-num">78%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat">
            <div className="stat-num">30dB</div>
            <div className="stat-label">SNR Avg</div>
          </div>
          <div className="stat">
            <div className="stat-num">21K+</div>
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
                  height: `${height}px`,
                  animationDelay: `${index * 0.04}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="research-team">
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
                imageSrc="src/assets/images/dilki.png"
              />
              <div className="team-name">Dilki Chamika</div>
              <div className="team-role">Team leader & Researcher</div>
              <div className="team-dept">ICT/21/817</div>
            </div>
            <div className="team-card">
              <TeamAvatar
                name="Yehani Athukorala"
                initials="YA"
                imageSrc="src/assets/images/yehani.png"
              />
              <div className="team-name">Yehani Athukorala</div>
              <div className="team-role">Developer & Researcher</div>
              <div className="team-dept">ICT/21/810</div>
            </div>
            <div className="team-card">
              <TeamAvatar
                name="Bhanuka Wickramasinghe"
                initials="BW"
                imageSrc="src/assets/images/bhanuka.jpg"
              />
              <div className="team-name">Bhanuka Wickramasinghe</div>
              <div className="team-role">Developer & Researcher</div>
              <div className="team-dept">ICT/21/940</div>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture">
        <div className="section-inner">
          <div className="section-label">02 — System Architecture</div>
          <h2 className="section-title">
            Framework <span className="hl">Architecture</span>
          </h2>
          <div className="divider"></div>
          <div className="arch-diagram">
            <div className="arch-flow">
              <div className="arch-box">Audio Input</div>
              <span className="arch-arrow">→</span>
              <div className="arch-box">Feature Extraction</div>
              <span className="arch-arrow">→</span>
              <div className="arch-box">Deep CNN Model</div>
              <span className="arch-arrow">→</span>
              <div className="arch-box">Suitability Score</div>
              <span className="arch-arrow">→</span>
              <div className="arch-box">LSB Embedding</div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo">
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

      <section id="results">
        <div className="section-inner">
          <div className="section-label">04 — Results & Evaluation</div>
          <h2 className="section-title">
            Performance <span className="hl">Results</span>
          </h2>
          <div className="divider"></div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Prediction Accuracy</div>
              <div className="metric-val">78%</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Avg Signal-to-Noise</div>
              <div className="metric-val">30dB</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Embedding Capacity (bps)</div>
              <div className="metric-val">10240</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">DeepSteg</div>
        <div className="footer-text">
          Intelligent Deep Learning-Based Suitability Scoring Framework for LSB
          Audio Steganography
        </div>
      </footer>
    </>
  );
}
