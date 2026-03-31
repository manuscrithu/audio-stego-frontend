import { useState, useRef } from "react";
import { predictScore } from "../api";
import WaveformViewer from "./WaveformViewer";


export default function AudioUploader({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  const audioUrl = file ? URL.createObjectURL(file) : null;

  const handleRemoveFile = () => {
  setFile(null);
  setError("");
  onResult(null);

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};

  const handleDrop = (e) => {
  e.preventDefault();
  const droppedFile = e.dataTransfer.files[0];
  if (droppedFile) setFile(droppedFile);
};

const handleDragOver = (e) => {
  e.preventDefault();
};

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
       setStatus("Uploading audio...");
  await new Promise(r => setTimeout(r, 600));

  setStatus("Analyzing audio signal...");
  await new Promise(r => setTimeout(r, 800));

  setStatus("Extracting audio features...");
  await new Promise(r => setTimeout(r, 900));

  setStatus("Running deep learning model...");
  const result = await predictScore(file);

  setStatus("Generating suitability score...");
  await new Promise(r => setTimeout(r, 600));

  onResult(result);




    } catch (err) {
      onResult(null);
      setError(err.message || "Prediction failed. Please try again.");
    } finally {
      setLoading(false);
       setStatus("");
    }
  };

  return (
    <div className="demo-card">
      <h3 className="demo-title">Upload Audio for Suitability Scoring</h3>
      <p className="demo-subtitle">Select a valid .mp3 file to run the model.</p>
      {/* Drag and Drop Area */}
<div
  className="dropzone"
  onDrop={handleDrop}
  onDragOver={handleDragOver}
>
  Drag & Drop your audio file here
</div>

<p className="or-text">or</p>

{/* File Upload Row */}
<div className="file-row">

  <input
    ref={fileInputRef}
    className="file-input"
    type="file"
    accept="audio/mpeg"
    onChange={(e) => {
      const selected = e.target.files[0];
      setFile(selected);
    }}
  />
 <span className="file-name">
    {file ? file.name : "No file chosen"}
  </span>

  {file && (
    <span className="remove-file" onClick={handleRemoveFile}>
      ✕
    </span>
  )}

</div>

{file && (
  <div className="file-details">
    <p>File: {file.name}</p>
    <p>Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
  </div>
)}

      {audioUrl && (
  <audio
  ref={audioRef}
  controls
  src={audioUrl}
  className="audio-player"
/>
)}
{audioUrl && (
  <WaveformViewer audioUrl={audioUrl} audioRef={audioRef} />
)}

      <button className="btn-primary demo-btn" onClick={handleSubmit} disabled={loading}>
  {loading ? (
    <span className="loading-content">
      <div className="loader"></div>
      Analyzing...
    </span>
  ) : (
    "Predict Score"
  )}
     </button>
     
{loading && <p className="ai-status">{status}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
