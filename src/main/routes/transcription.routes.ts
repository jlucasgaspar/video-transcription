import { router } from '../protocols/IExpress';
import { upload } from '../protocols/IMulter';
import { uploadConfig } from '../config/upload';
import { adaptRoute } from '../adapters/routeAdapter';
import { makeTranscriptionController } from '../factories/makeTranscriptionController';

const uploadFile = upload(uploadConfig.multer);

router.post('/transcrever', uploadFile.single('file'), adaptRoute(makeTranscriptionController()));

export const transcriptionRoutes = router;