import { MongoClient } from 'mongodb';

let cachedClient = null;

async function getClient() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, company, email, message, interest, budget } = req.body;

    // Server-side validation
    const errors = [];
    if (!name || !name.trim()) errors.push('Name is required');
    if (!phone || !phone.trim()) errors.push('Phone number is required');
    if (!company || !company.trim()) errors.push('Company name is required');
    if (!email || !email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please enter a valid email');
    }
    if (!message || !message.trim()) errors.push('Message is required');

    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(', ') });
    }

    const client = await getClient();
    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    await collection.insertOne({
      name: name.trim(),
      phone: phone.trim(),
      company: company.trim(),
      email: email.trim(),
      message: message.trim(),
      interest: interest || '',
      budget: budget || '',
      createdAt: new Date(),
    });

    return res.status(201).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
