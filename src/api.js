const API_URL = import.meta.env.DEV
  ? "/api"
  : "https://audio-stego-production.up.railway.app";

export const predictScore = async (audioFile) => {
  const formData = new FormData();
  formData.append("file", audioFile, audioFile.name);

  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: formData,
    headers: {
      accept: "application/json",
    },
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const message =
      data?.detail ||
      data?.message ||
      `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
};
