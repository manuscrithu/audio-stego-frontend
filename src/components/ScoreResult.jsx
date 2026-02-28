export default function ScoreResult({ result }) {
  if (!result) return null;

  return (
    <div className="demo-card result-panel">
      <h3 className="demo-title">Predicted Score</h3>
      <p className="score">{result.predicted_score} / 10</p>
      <p className="result-text">{result.interpretation}</p>
    </div>
  );
}
