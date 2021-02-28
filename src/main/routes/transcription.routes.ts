import { router } from '../protocols/IExpress';
import { upload } from '../protocols/IMulter';
import { uploadConfig } from '../config/upload';

const uploadFile = upload(uploadConfig.multer)

router.get('/transcrever',  (req, res) => {
    res.json({ ok: true });
});

router.post('/transcrever', uploadFile.single('file'), (req, res) => {
    res.json({ ok: false });
});

export const transcriptionRoutes = router;