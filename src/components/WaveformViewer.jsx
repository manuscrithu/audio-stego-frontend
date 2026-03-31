import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function WaveformViewer({ audioUrl, audioRef }) {

  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    if (!audioUrl) return;

    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#5f7cff",
      progressColor: "#c084fc",
      cursorColor: "#ffffff",
      barWidth: 2,
      barRadius: 3,
      height: 90,
      responsive: true
    });

    wavesurferRef.current.load(audioUrl);

    const audio = audioRef.current;

    if (audio) {

      audio.addEventListener("play", () => {
        wavesurferRef.current.play();
      });

      audio.addEventListener("pause", () => {
        wavesurferRef.current.pause();
      });

      audio.addEventListener("seeked", () => {
        const progress = audio.currentTime / audio.duration;
        wavesurferRef.current.seekTo(progress);
      });

    }

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };

  }, [audioUrl]);

  return <div ref={waveformRef}></div>;
}