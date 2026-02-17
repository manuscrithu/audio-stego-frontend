const API_URL = import.meta.env.VITE_API_URL?.trim()
  ? import.meta.env.VITE_API_URL.trim()
  : import.meta.env.DEV
    ? "/api"
    : "https://audio-stego-production.up.railway.app";

export const predictScore = async (audioFile) => {
  const formData = new FormData();
  formData.append("file", audioFile, audioFile.name);

  let response;
  try {
    response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      body: formData,
      headers: {
        accept: "application/json",
      },
    });
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Unable to reach the API. Please check your network/CORS setup and try again.");
    }
    throw error;
  }

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

  if (data?.error) {
    throw new Error(data.error);
  }

  return data;
};
