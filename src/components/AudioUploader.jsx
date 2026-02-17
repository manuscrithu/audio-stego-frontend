import { useState } from "react";
import { predictScore } from "../api";

export default function AudioUploader({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select an audio file.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const result = await predictScore(file);
      onResult(result);
    } catch (err) {
      setError(err.message || "Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Analyzing..." : "Predict Score"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
