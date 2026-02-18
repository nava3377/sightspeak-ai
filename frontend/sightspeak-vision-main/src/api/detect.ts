export const detectImage = async (base64Image: string) => {
  const response = await fetch("http://127.0.0.1:8000/analyze-frame", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: base64Image,
    }),
  });

  if (!response.ok) {
    throw new Error("Detection failed");
  }

  return await response.json();
};
