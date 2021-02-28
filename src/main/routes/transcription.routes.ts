import { Router } from 'express';

const router = Router()

router.get('/transcrever', (req, res) => {
    res.json({ ok: true })
});

//router.post('/transcrever', );

export const transcriptionRoutes = router;