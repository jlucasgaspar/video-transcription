import { router } from '../protocols/IExpress';

router.get('/transcrever', (req, res) => {
    res.json({ ok: true });
});

router.post('/transcrever', (req, res) => {
    res.json({ ok: false });
});

export const transcriptionRoutes = router;