import { Router } from 'express';
import health from './health';
//
const router = Router();
//
router.use('/healthz?', health);
//
export default router;
