import { useState } from "react";
import AudioUploader from "./components/AudioUploader";
import ScoreResult from "./components/ScoreResult";
import TeamAvatar from "./components/TeamAvatar";
import "./index.css";

export default function App() {
  const [result, setResult] = useState(null);
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
            <div className="stat-num">79.3%</div>
            <div className="stat-label">Accuracy (R²)</div>
        </div>
          <div className="stat">
            <div className="stat-num">92.3dB</div>
            <div className="stat-label">PSNR Avg</div>
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
                  "--h": `${height}px`,
                  animationDelay: `${Math.abs(index - waveformCenterIndex) * 0.04}s`,
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

     <section id="architecture">
  <div className="section-inner">
    <div className="section-label">02 — System Architecture</div>
    <h2 className="section-title">
      Framework <span className="hl">Architecture</span>
    </h2>
    <p className="section-sub">
      The proposed framework evaluates audio carriers using deep learning to determine
      their suitability for secure LSB steganographic embedding.
    </p>
    <div className="divider"></div>
    <div className="arch-diagram" style={{padding: "2rem"}}>
      <div className="pipeline-stages">

        {/* Stage I */}
        <div className="pipeline-stage stage-teal">
          <div className="stage-header">Stage I — Data collection and preprocessing</div>
          <div className="stage-boxes">
            <div className="stage-box">
              <div className="stage-box-title">Raw audio dataset</div>
              <div className="stage-box-sub">21,116 MP3/WAV files<br/>varied SR and duration</div>
            </div>
            <span className="stage-arrow">→</span>
            <div className="stage-box">
              <div className="stage-box-title">Preprocessing</div>
              <div className="stage-box-sub">Resample → 16 kHz<br/>Pad / trim → 4s (64k samples)</div>
            </div>
            <span className="stage-arrow">→</span>
            <div className="stage-box">
              <div className="stage-box-title">Saved artefacts</div>
              <div className="stage-box-sub">preprocessed_audio.npy<br/>(21,116 × 64,000) + file_list.csv</div>
            </div>
          </div>
        </div>

        <div className="pipeline-connector">↓</div>

        {/* Stage II */}
        <div className="pipeline-stage stage-blue">
          <div className="stage-header">Stage II — LSB embedding and metric computation</div>
          <div className="stage-boxes">
            <div className="stage-box">
              <div className="stage-box-title">1-bit LSB embedding</div>
              <div className="stage-box-sub">5 KB fixed secret<br/>int16 substitution<br/>cover + stego WAV pairs</div>
            </div>
            <span className="stage-arrow">→</span>
            <div className="stage-box">
              <div className="stage-box-title">Quality metrics</div>
              <div className="stage-box-sub">PSNR, PESQ, STOI<br/>Capacity (bps), MSV<br/>Robustness (BER / AWGN 30dB)</div>
            </div>
            <span className="stage-arrow">→</span>
            <div className="stage-box">
              <div className="stage-box-title">Overall score</div>
              <div className="stage-box-sub">Weighted composite [0–10]<br/>imp 35%, rob 30%<br/>cap 20%, comp 15%</div>
            </div>
          </div>
        </div>

        <div className="pipeline-connector">↓</div>

        {/* Stage III */}
        <div className="pipeline-stage stage-pink">
          <div className="stage-header">Stage III — Deep feature extraction (two-branch)</div>
          <div className="stage-boxes stage-boxes--wide">
            <div className="stage-box stage-box--wide">
              <div className="stage-box-title">Branch A — CNN-LSTM</div>
              <div className="stage-box-sub">
                Mel-spectrogram (128 × 251)<br/>
                2× Conv1D + BatchNorm + Dropout<br/>
                LSTM (64 units, L2 reg)<br/>
                Dense embedding layer<br/>
                Output: 128-dim task-specific vector
              </div>
            </div>
            <div className="stage-box stage-box--wide">
              <div className="stage-box-title">Branch B — MERT-v1-95M</div>
              <div className="stage-box-sub">
                Pre-trained music transformer<br/>
                95M parameters, frozen weights<br/>
                Last-hidden-state mean-pool<br/>
                Batch 16, T4 GPU (~30 min)<br/>
                Output: 768-dim acoustic vector
              </div>
            </div>
          </div>
          <div className="stage-concat">Concatenate → 896-dim feature vector</div>
        </div>

        <div className="pipeline-connector">↓</div>

        {/* Stage IV */}
        <div className="pipeline-stage stage-orange">
          <div className="stage-header">Stage IV — Ensemble regression model training</div>
          <div className="stage-scaler">StandardScaler (fit on train only)</div>
          <div className="stage-boxes">
            <div className="stage-box">
              <div className="stage-box-title">XGBoost</div>
              <div className="stage-box-sub">n=1000, depth=5, lr=0.03<br/>R²=0.7913, MAE=0.1187</div>
            </div>
            <div className="stage-box">
              <div className="stage-box-title">LightGBM</div>
              <div className="stage-box-sub">n=1000, depth=5, lr=0.03<br/>R²=0.7902, MAE=0.1195</div>
            </div>
          </div>
          <div className="stage-blend">
            <div className="stage-blend-title">50/50 blend prediction</div>
            <div className="stage-blend-sub">R²=0.7929, MAE=0.1182, RMSE=0.2001</div>
          </div>
        </div>

        <div className="pipeline-footnote">Dataset split: 70% train / 15% validation / 15% test</div>

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
        <div className="metric-icon">🎯</div>
        <div className="metric-label">Prediction Accuracy (R²)</div>
        <div className="metric-val">79.3%</div>
      </div>
      <div className="metric-card">
        <div className="metric-icon">📡</div>
        <div className="metric-label">Avg Signal-to-Noise (PSNR)</div>
        <div className="metric-val">92.3 dB</div>
      </div>
      <div className="metric-card">
        <div className="metric-icon">📦</div>
        <div className="metric-label">Embedding Capacity (bps)</div>
        <div className="metric-val">10,240</div>
      </div>
      <div className="metric-card">
        <div className="metric-icon">🔊</div>
        <div className="metric-label">Perceptual Quality (PESQ)</div>
        <div className="metric-val">4.62 / 4.5</div>
      </div>
      <div className="metric-card">
        <div className="metric-icon">🧠</div>
        <div className="metric-label">Intelligibility (STOI)</div>
        <div className="metric-val">0.9999</div>
      </div>
      <div className="metric-card">
        <div className="metric-icon">📉</div>
        <div className="metric-label">Prediction Error (MAE)</div>
        <div className="metric-val">0.118</div>
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
