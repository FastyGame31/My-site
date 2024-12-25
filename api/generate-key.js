export default function handler(req, res) {
  // Check if the user is allowed to generate a key (i.e., they haven't generated one yet)
  const key = req.query.key;

  if (key) {
    // If the user is requesting a key, generate and return it
    const randomKey = `sylphx1day-${generateRandomKey()}`;
    res.status(200).json({ key: randomKey });
  } else {
    // If no key request, return an empty response or a message
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
