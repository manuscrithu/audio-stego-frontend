import { useState } from "react";
import AudioUploader from "./components/AudioUploader";
import ScoreResult from "./components/ScoreResult";
import "./index.css";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h1>🎧 Audio Steganography Quality Scorer</h1>
      <AudioUploader onResult={setResult} />
      <ScoreResult result={result} />
    </div>
  );
}
