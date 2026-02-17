import { useState } from "react";
import { predictScore } from "../api";

export default function AudioUploader({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select an .mp3 audio file.");
      return;
    }

    if (file.type !== "audio/mpeg") {
      setError("Please select a valid .mp3 audio file.");
      return;
    }

    setError("");
    onResult(null);
    setLoading(true);

    try {
      const result = await predictScore(file);
      onResult(result);
    } catch (err) {
      onResult(null);
      setError(err.message || "Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Upload an .mp3 Audio File</h2>
      <input
        type="file"
        accept="audio/mpeg"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Analyzing..." : "Predict Score"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
