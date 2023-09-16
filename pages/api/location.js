export default function handler(req, res) {
    if (req.method === 'POST') {
      const { lat, lon } = req.body;
  
      // Process the location data (you can add your logic here)
  
      res.status(200).json({ message: 'Location received' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  