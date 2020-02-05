import { Router } from 'express';
//
const router = Router();
//
router.get('/', (req, res, next) => {
  res.send("I'm good");
});
//
router.post('/', (req, res, next) => {
  res.json({ test: 'available post method' });
});
//
export default router;
