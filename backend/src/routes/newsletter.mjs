import { Router } from 'express';

export const router = Router();

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ 
        error: 'Email is required' 
      });
    }

    // For now, just return success
    // You can implement newsletter subscription logic here later
    res.status(200).json({ 
      success: true, 
      message: 'Newsletter subscription successful!' 
    });

  } catch (error) {
    console.error('Error with newsletter subscription:', error);
    res.status(500).json({ 
      error: 'Failed to subscribe to newsletter. Please try again later.' 
    });
  }
});

