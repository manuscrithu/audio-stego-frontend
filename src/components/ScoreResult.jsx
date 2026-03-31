import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreResult({ result }) {
  if (!result) return null;

  const score = Number(result.predicted_score);
  const isValidScore = Number.isFinite(score);
  const normalizedScore = isValidScore
    ? Math.max(0, Math.min(100, score * 10))
    : 0;
  const scoreText = isValidScore ? `${score.toFixed(2)}/10` : "N/A";

  return (
    <div className="demo-card result-panel">
      <h3 className="demo-title">Predicted Score</h3>
      <div className="result-progress">
        <CircularProgressbar value={normalizedScore} text={scoreText} />
      </div>

      <div className="result-badges">
        {result.grade && <span className="result-badge">Grade: {result.grade}</span>}
        {result.steganography_suitability && (
          <span className="result-badge">Suitability: {result.steganography_suitability}</span>
        )}
      </div>

      <div className="result-meta-grid">
        {result.scale && (
          <div className="result-meta-item">
            <span className="result-meta-label">Scale</span>
            <span className="result-meta-value">{result.scale}</span>
          </div>
        )}
        {result.detectability_risk && (
          <div className="result-meta-item">
            <span className="result-meta-label">Detectability Risk</span>
            <span className="result-meta-value">{result.detectability_risk}</span>
          </div>
        )}
        {result.perceptual_distortion && (
          <div className="result-meta-item">
            <span className="result-meta-label">Perceptual Distortion</span>
            <span className="result-meta-value">{result.perceptual_distortion}</span>
          </div>
        )}
      </div>

      {result.description && <p className="result-description">{result.description}</p>}
      <p className="result-text">{result.interpretation}</p>
    </div>
  );
}
