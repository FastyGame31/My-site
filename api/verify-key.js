module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = req.body; // Parse the incoming JSON body
      const { ip, key } = data;

      // Check if both IP and key are present
      if (!ip || !key) {
        return res.status(400).json({ success: false, message: 'IP and key are required' });
      }

      // Example validation logic
      const validKeyPrefix = 'sylphx1day-'; // Prefix used by valid keys
      const keyRegex = /^sylphx1day-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}$/; // Updated regex

      const isValidKey = keyRegex.test(key) && key.startsWith(validKeyPrefix);

      if (isValidKey) {
        return res.json({ success: true });
      } else {
        return res.json({ success: false, message: 'Invalid key format or prefix' });
      }
    } catch (error) {
      console.error('Error parsing request:', error);
      return res.status(400).json({ success: false, message: 'Invalid request' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};
