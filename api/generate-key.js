export default function handler(req, res) {
  // Generate a random key
  const randomKey = Math.random().toString(36).substring(2, 15);
  
  // Respond with the generated key
  res.status(200).json({ key: randomKey });
}
