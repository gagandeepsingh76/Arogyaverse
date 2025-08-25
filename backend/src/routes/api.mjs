import { Router } from 'express';
import { router as contactRouter } from './contact.mjs';
import { router as newsletterRouter } from './newsletter.mjs';

export const router = Router();

router.use('/contact', contactRouter);
router.use('/newsletter', newsletterRouter);

