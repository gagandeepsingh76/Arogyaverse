import { Router } from 'express';

export const router = Router();

// Test endpoint to verify the route is working
router.get('/test', (req, res) => {
  res.json({ message: 'Contact route is working!' });
});

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, topic, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: firstName, lastName, email, and message are required' 
      });
    }

    // For now, just log the data and return success
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      topic,
      message
    });

    res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully! (Email functionality will be added soon)' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Failed to process contact form. Please try again later.' 
    });
  }
});
