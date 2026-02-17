export default function ScoreResult({ result }) {
  if (!result) return null;

  return (
    <div className="card result">
      <h2>Predicted Score</h2>
      <p className="score">{result.predicted_score} / 10</p>
      <p>{result.interpretation}</p>
    </div>
  );
}
