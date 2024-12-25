export default function handler(req, res) {
  // Function to generate a random alphanumeric string
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

  // Generate the key
  const randomKey = `sylphx1day-${generateRandomKey()}`;

  // Respond with the generated key
  res.status(200).json({ key: randomKey });
}
