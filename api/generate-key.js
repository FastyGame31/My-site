export default function handler(req, res) {
  // Log the incoming request for debugging
  console.log('Received request:', req.query);

  const { key } = req.query;

  // Simulate key storage (this could be replaced with a database or persistent storage if needed)
  let generatedKey = null;

  // Check if the key has already been generated (in-memory storage or database)
  if (!generatedKey && key === 'true') {
    // Generate the key if it hasn't been generated yet
    generatedKey = `sylphx1day-${generateRandomKey()}`;
    console.log('Generated key:', generatedKey); // Log the generated key
  }

  if (generatedKey) {
    // Return the generated key
    res.status(200).json({ key: generatedKey });
  } else {
    // If no key was generated, return null
    console.log('No key generated, returning null');
    res.status(200).json({ key: null });
  }
}

// Helper function to generate random key structure
function generateRandomKey() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 25; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    if (i % 5 === 4 && i !== 24) {
      result += '-'; // Add dash after every 5 characters
    }
  }
  return result;
}
