// api/generate-key.js

export default function handler(req, res) {
  // Generate a key structure like "sylphx1day-D43oV-fK4Ho-Q8OX3-qLPMH-hq81S"
  const randomKey = `sylphx1day-${generateRandomString()}-${generateRandomString()}-${generateRandomString()}-${generateRandomString()}-${generateRandomString()}`;

  // Send the generated key as a response
  res.status(200).json({ key: randomKey });
}

// Helper function to generate random string of 5 characters (letters and numbers)
function generateRandomString() {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}
