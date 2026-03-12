import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreResult({ result }) {
  if (!result) return null;

  return (
    <div className="demo-card result-panel">
      <h3 className="demo-title">Predicted Score</h3>
      <div style={{width:"120px", margin:"20px auto"}}>
<CircularProgressbar
  value={result.predicted_score * 10}
  text={`${result.predicted_score}/10`}
/>
</div>
      <p className="result-text">{result.interpretation}</p>
    </div>
  );
}
